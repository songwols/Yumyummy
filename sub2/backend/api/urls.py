from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from api import views


router = DefaultRouter(trailing_slash=False)
router.register(r"search_stores", views.StoreSearchViewSet,
                basename="search_stores")
router.register(r"all_stores", views.StoreAllViewSet, basename="all_stores")
urlpatterns = router.urls
