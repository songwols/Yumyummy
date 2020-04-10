from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from api import views


router = DefaultRouter(trailing_slash=False)
router.register(r"search_stores", views.StoreSearchViewSet,
                basename="search_stores")
router.register(r"all_stores", views.StoreAllViewSet, basename="all_stores")
router.register(r"id_stores", views.StoreIdViewSet, basename="id_stores")
router.register(r"category_stores",
                views.StoreCategoryViewSet, basename="category_stores")
router.register(r"address_stores",
                views.StoreAddressViewSet, basename="address_stores")
router.register(r"storeid_menus",
                views.MenuStoreIdViewSet, basename="storeid_menus")
router.register(r"id_reviews", views.ReviewIdViewSet, basename="id_reviews")
router.register(r"all_reviews", views.ReviewAllViewSet, basename="all_reviews")
router.register(
    r"id_users", views.UserIdViewSet, basename="id_users")
urlpatterns = router.urls
