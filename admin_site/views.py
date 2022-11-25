from django.shortcuts import render


def index(request):
    context = {'page_title': "Dashboards"}
    return render(request, 'client_site/index.html', context)


def deposit(request):
    context = {'page_title': "Deposit"}
    return render(request, 'client_site/deposit.html', context)


def withdraw(request):
    context = {'page_title': "Withdraw"}
    return render(request, 'client_site/withdraw.html', context)


def history(request):
    context = {'page_title': "History"}
    return render(request, 'client_site/history.html', context)


def platform(request):
    context = {'page_title': "Platform"}
    return render(request, 'client_site/platform.html', context)


def profile(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile.html', context)


def profile_setting(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile-setting.html', context)


def profile_document(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile-documents.html', context)


def profile_withdrawal(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile-withdrawal.html', context)


def profile_trading_account(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile-trading-account.html', context)


def profile_logs(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile-logs.html', context)


def profile_referrals(request):
    context = {'page_title': "Profile", 'is_profile_page': True}
    return render(request, 'client_site/profile-referrals.html', context)


def admin_client(request):
    context = {'page_title': "Client"}
    return render(request, 'admin_site/admin-client.html', context)


def admin_trading_account(request):
    context = {'page_title': "Trading Account"}
    return render(request, 'admin_site/admin-trading-account.html', context)


def admin_close_position_history(request):
    context = {'page_title': "Closed Position History"}
    return render(request, 'admin_site/admin-close-position-history.html', context)


def admin_ib(request):
    context = {'page_title': "IB"}
    return render(request, 'admin_site/admin-ib.html', context)


def admin_payment_history(request):
    context = {'page_title': "Payment History"}
    return render(request, 'admin_site/admin-payment-history.html', context)


def admin_order_history(request):
    context = {'page_title': "Order History"}
    return render(request, 'admin_site/admin-order-history.html', context)


def admin_broker_setting_general(request):
    context = {'page_title': "Broker Setting General", 'is_menu_configure': True}
    return render(request, 'admin_site/admin-broker-setting-general.html', context)


def admin_broker_setting_cash_management(request):
    context = {'page_title': "Setting Cash Management", 'is_menu_configure': True}
    return render(request, 'admin_site/admin-broker-setting-cash-management.html', context)


def admin_broker_setting_white_label(request):
    context = {'page_title': "Setting White Label", 'is_menu_configure': True}
    return render(request, 'admin_site/admin-broker-setting-white-label.html', context)


def admin_broker_setting_user(request):
    context = {'page_title': "Setting User", 'is_menu_configure': True}
    return render(request, 'admin_site/admin-broker-setting-user.html', context)


def admin_client_setting_client_management(request):
    context = {'page_title': "Setting Client Management", 'is_menu_configure': True}
    return render(request, 'admin_site/admin-client-setting-client-management.html', context)


def admin_client_setting_client_signup(request):
    context = {'page_title': "Setting Client Signup", 'is_menu_configure': True}
    return render(request, 'admin_site/admin-client-setting-client-signup.html', context)


def admin_setting_ib(request):
    context = {'page_title': "Setting IB"}
    return render(request, 'admin_site/admin-setting-ib.html', context)


def admin_mailing(request):
    context = {'page_title': "Mailing"}
    return render(request, 'admin_site/admin-mailing.html', context)
