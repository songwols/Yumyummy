from django.contrib import admin

from .models import Store
from .models import User
from .models import Category
from .models import Bhour
from .models import Menu
from .models import Review
# Register your models here.


admin.site.register(Store)
admin.site.register(User)
admin.site.register(Category)
admin.site.register(Bhour)
admin.site.register(Menu)
admin.site.register(Review)
