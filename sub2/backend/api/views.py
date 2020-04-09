from api import models, serializers
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination


class SmallPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = "page_size"
    max_page_size = 50


class StoreSearchViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        name = self.request.query_params.get("store_name", "")
        searchqueryset = (
            models.Store.objects.all().filter(store_name__contains=name).order_by("store_id")
        )
        return searchqueryset


class StoreAllViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        allqueryset = (
            models.Store.objects.all()
        )
        return allqueryset


class StoreIdViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.StoreSerializer
    pagination_class = SmallPagination

    def get_queryset(self):
        id = self.request.query_params.get("store_id", "")
        idqueryset = (
            models.Store.objects.all().filter(store_id__contains=id)
        )
        return idqueryset
