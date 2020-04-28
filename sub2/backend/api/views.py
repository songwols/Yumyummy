from api import models, serializers
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination


# 10개씩 불러오도록 paging
class SmallPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 50


# 검색하여 store 불러오기
class StoreSearchViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        name = self.request.query_params.get("store_name", "")
        address = self.request.query_params.get("address", "")
        # 검색 빈칸일때 예외처리 해야함
        # menu = self.request.query_params.get("menu", "")
        # score = self.request.query_params.get("score", "")
        # review = self.request.query_params.get("review", "")
        queryset = (
            models.Store.objects.all().filter(
                store_name__contains=name, address__contains=address).order_by("store_id")
        )

        return queryset


# 모든 store 불러오기
class StoreAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        queryset = (
            models.Store.objects.all().order_by("store_id")
        )
        return queryset


# id로 store 불러오기
class StoreIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("store_id", "")
        queryset = (
            models.Store.objects.all().filter(store_id=id).order_by("store_id")
        )
        return queryset


# category로 store 불러오기
class StoreCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        category = self.request.query_params.get("category", "")
        queryset = (
            models.Store.objects.all().filter(category__contains=category).order_by("store_id")
        )
        return queryset


# address로 store 검색하기
class StoreAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        address = self.request.query_params.get("address", "")
        queryset = (
            models.Store.objects.all().filter(address__contains=address).order_by("store_id")
        )
        return queryset


# 모든 menu 불러오기
class MenuAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MenuSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        queryset = (
            models.Menu.objects.all().order_by("menu_id")
        )
        return queryset


# store_id로 menu 불러오기
class MenuStoreIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MenuSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("store_id", "")
        queryset = (
            models.Menu.objects.all().filter(store_id=id).order_by("menu_id")
        )
        return queryset


# menu 이름으로 menu 불러오기
class MenuMenuViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MenuSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        menu = self.request.query_params.get("menu", "")
        queryset = (
            models.Menu.objects.all().filter(menu=menu).order_by("menu_id")
        )
        return queryset


# 모든 review 불러오기
class ReviewAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReviewSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        queryset = (
            models.Review.objects.all().order_by("review_id")
        )
        return queryset


# store_id로 review 불러오기
class ReviewIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReviewSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("store_id", "")
        print(id)
        queryset = (
            models.Review.objects.all().filter(store_id=id).order_by("review_id")
        )
        return queryset


# user_id로 review 불러오기
class ReviewUserIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReviewSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("user_id", "")
        queryset = (
            models.Review.objects.all().filter(user_id=id).order_by("review_id")
        )
        return queryset


# # user_id로 user 불러오기
# class UserIdViewSet(viewsets.ModelViewSet):
#     serializer_class = serializers.UserSerializer
#     pagination_class = SmallPagination

#     def get_queryset(self):
#         id = self.request.query_params.get("user_id", "")
#         queryset = (
#             models.User.objects.all().filter(user_id=id).order_by("user_id")
#         )
#         return queryset


# # review 등록하기
# class PostReview(viewsets.ModelViewSet):
#     serializer_class = serializers.ReviewSerializer

#     def perform_create(self, serializer):
#         store_id = self.request.query_params.get("store_id", "")
#         user_id = self.request.query_params.get("user_id", "")
#         total_score = self.request.query_params.get("score", "")
#         content = self.request.query_params.get("content", "")
#         print("여기여기!!!!!!!!!!!!!!!!!!!!!!")
#         print(store_id + " " + user_id)
#         models.Review.objects.create(
#             store_id=store_id, user_id=user_id, total_score=total_score, content=content)


# # review 삭제하기
# class DeleteReview():
#     serializer_class = serializers.ReviewSerializer

#     def delete(self):
#         review_id = self.request.query_params.get("review_id", "")
#         review = models.Review.objects.get(review_id=review_id)
#         review.delete()


# # review 수정하기
# class UpdateReview(viewsets.ModelViewSet):
#     serializer_class = serializers.ReviewSerializer

#     def permform_update(self, request, *args, **kwargs):
#         review_id = self.request.query_params.get("review_id", "")
#         total_score = self.request.query_params.get("total_score", "")
#         content = self.request.query_params.get("content", "")
#         review = models.Review.objects.get(review_id=review_id)
#         review.total_score = total_score
#         review.content = content
#         review.save()
