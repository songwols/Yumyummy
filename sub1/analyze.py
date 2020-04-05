from parse import load_dataframes
import pandas as pd
import shutil


def sort_stores_by_score(dataframes, n=20, min_reviews=30):
    """
    Req. 1-2-1 각 음식점의 평균 평점을 계산하여 높은 평점의 음식점 순으로 `n`개의 음식점을 정렬하여 리턴합니다
    Req. 1-2-2 리뷰 개수가 `min_reviews` 미만인 음식점은 제외합니다.
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )

    # 최소리뷰개수만 냅두고 필터링
    scores = stores_reviews.groupby(["store", "store_name"]).filter(lambda x: len(x) > min_reviews)

    # 같은 가게 합치기
    scores = scores.groupby(["store", "store_name"])

    # 평균내기
    scores = scores.mean()

    # score가 높은 것부터 정렬
    scores = scores.sort_values(by=["score"], ascending=False)

    return scores.head(n=n).reset_index()


def get_most_reviewed_stores(dataframes, n=20):
    """
    Req. 1-2-3 가장 많은 리뷰를 받은 `n`개의 음식점을 정렬하여 리턴합니다
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    # 같은 가게 합치기
    review_counts = stores_reviews.groupby(["store", "store_name"])
    
    # 개수 측정해서 column이름 counts로 저장
    review_counts = review_counts.size().to_frame().rename(columns={0: "counts"})
    
    # 리뷰개수 많은 순으로 정렬
    review_counts = review_counts.sort_values(by=['counts'], ascending=False)

    return review_counts.head(n=n).reset_index()


def get_most_active_users(dataframes, n=20):
    """
    Req. 1-2-4 가장 많은 리뷰를 작성한 `n`명의 유저를 정렬하여 리턴합니다.
    """
    most_review = dataframes['users']
    
    # id별로 묶어서 개수 세서 counts라는 이름으로 저장
    counts = most_review.groupby(['id']).size().to_frame().rename(columns={0: "counts"})

    # 리뷰 많이 쓴 사람 순으로 정렬
    counts = counts.sort_values(by=['counts'], ascending=False)

    return counts.head(n=n).reset_index()


def main():
    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    stores_most_scored = sort_stores_by_score(data)

    print("[가장 평점이 높은 음식점]")
    print(f"{separater}\n")
    for i, store in stores_most_scored.iterrows():
        print(
            "{rank}위: {store}({score}점)".format(
                rank=i + 1, store=store.store_name, score=store.score
            )
        )
    print(f"\n{separater}\n\n")

    most_reviewed_stores = get_most_reviewed_stores(data)

    print("[가장 많은 리뷰를 받은 음식점]")
    print(f"{separater}\n")
    for i, store in most_reviewed_stores.iterrows():
        print(
            "{rank}위: {store}({counts}개)".format(
                rank=i + 1, store=store.store_name, counts=store.counts
            )
        )
    print(f"\n{separater}\n\n")

    most_active_users = get_most_active_users(data)
    print("[가장 많은 리뷰를 작성한 유저]")
    print(f"{separater}\n")
    for i, user in most_active_users.iterrows():
        print(
            "{rank}위: id:{user}({score}개)".format(
                rank=i + 1, user=user.id, score=user.counts
            )
        )
    print(f"\n{separater}\n\n")


if __name__ == "__main__":
    main()
