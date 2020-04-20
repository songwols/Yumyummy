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
        menu = self.request.query_params.get("menu", "")
        # score = self.request.query_params.get("score", "")
        # review = self.request.query_params.get("review", "")
        queryset = (
            models.Store.objects.all().filter(
                store_name__contains=name, address__contains=address)
        )
        print(address)
        return queryset


# 모든 store 불러오기
class StoreAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        queryset = (
            models.Store.objects.all()
        )
        return queryset


# id로 store 불러오기
class StoreIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("store_id", "")
        print(id)
        queryset = (
            models.Store.objects.all().filter(store_id=id)
        )
        return queryset


# category로 store 불러오기
class StoreCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        category = self.request.query_params.get("category", "")
        queryset = (
            models.Store.objects.all().filter(category__contains=category)
        )
        return queryset


# address로 store 검색하기
class StoreAddressViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        address = self.request.query_params.get("address", "")
        queryset = (
            models.Store.objects.all().filter(address__contains=address)
        )
        return queryset


# 모든 menu 불러오기
class MenuAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MenuSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        queryset = (
            models.Menu.objects.all()
        )
        return queryset


# store_id로 menu 불러오기
class MenuStoreIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MenuSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("store_id", "")
        queryset = (
            models.Menu.objects.all().filter(store_id=id)
        )
        return queryset


# menu 이름으로 menu 불러오기
class MenuMenuViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.MenuSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        menu = self.request.query_params.get("menu", "")
        queryset = (
            models.Menu.objects.all().filter(menu=menu)
        )
        return queryset


# 모든 review 불러오기
class ReviewAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ReviewSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        queryset = (
            models.Review.objects.all()
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


# user_id로 user 불러오기
class UserIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.UserSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("user_id", "")
        queryset = (
            models.User.objects.all().filter(user_id=id)
        )
        return queryset


# review 등록하기(class 이름만 정해놓으려고 만든거라 내용은 수정해야함)
class PostReview(viewsets.ModelViewSet):
    serializer_class = serializers.ReviewSerializer


# review 삭제하기(class 이름만 정해놓으려고 만든거라 내용은 수정해야함)
class DeleteReview():
    serializer_class = serializers.ReviewSerializer


# review 수정하기(class 이름만 정해놓으려고 만든거라 내용은 수정해야함)
class UpdateReview():
    serializer_class = serializers.ReviewSerializer


# user 등록하기(class 이름만 정해놓으려고 만든거라 내용은 수정해야함)
class PostUser():
    serializer_class = serializers.UserSerializer


# user 삭제하기(class 이름만 정해놓으려고 만든거라 내용은 수정해야함)
class DeleteUser():
    serializer_class = serializers.UserSerializer


# user 수정하기(class 이름만 정해놓으려고 만든거라 내용은 수정해야함)
class UpdateUser():
    serializer_class = serializers.UserSerializer
