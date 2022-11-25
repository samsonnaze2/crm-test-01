"""python_crm_site URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# from django.contrib import admin
from django.urls import path

from admin_site import views

urlpatterns = [
    path('', views.index, name='index'),
    path('deposit', views.deposit, name='deposit'),
    path('withdraw', views.withdraw, name='withdraw'),
    path('history', views.history, name='history'),
    path('platform', views.platform, name='platform'),
    path('profile', views.profile, name='profile'),
    path('profile/setting', views.profile_setting, name='profile_setting'),
    path('profile/document', views.profile_document, name='profile_document'),
    path('profile/withdrawal', views.profile_withdrawal, name='profile_withdrawal'),
    path('profile/trading-account', views.profile_trading_account, name='profile_trading_account'),
    path('profile/logs', views.profile_logs, name='profile_logs'),
    path('profile/referrals', views.profile_referrals, name='profile_referrals'),
    path('admin/client', views.admin_client, name='admin_client'),
    path('admin/trading-account', views.admin_trading_account, name='admin_trading_account'),
    path('admin/ib', views.admin_ib, name='admin_ib'),
    path('admin/payment-history', views.admin_payment_history, name='admin_payment_history'),
    path('admin/position/history/close', views.admin_close_position_history, name='admin_close_position_history'),
    path('admin/order-history', views.admin_order_history, name='admin_broker_setting_general'),
    path('admin/broker-setting-general', views.admin_broker_setting_general, name='admin_order_history'),
    path('admin/broker-setting-cash-management', views.admin_broker_setting_cash_management, name='admin_broker_setting_cash_management'),
    path('admin/broker-setting-white-label', views.admin_broker_setting_white_label, name='admin_broker_setting_white_label'),
    path('admin/broker-setting-user', views.admin_broker_setting_user, name='admin_broker_setting_user'),
    path('admin/client-setting-client-management', views.admin_client_setting_client_management, name='admin_client_setting_client_management'),
    path('admin/client-setting-client-signup', views.admin_client_setting_client_signup, name='admin_client_setting_client_signup'),
    path('admin/setting/ib', views.admin_setting_ib, name='admin_setting_ib'),
    path('admin/mailing', views.admin_mailing, name='admin_mailing'),
]
