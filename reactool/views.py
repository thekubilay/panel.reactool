from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.utils.safestring import mark_safe
from django.contrib import messages
from django.contrib.auth import (authenticate, login, logout)


def index(request):
  return render(request, "base.html")


def page_login(request):
  if request.method == "POST":
    username = request.POST.get("username")
    password = request.POST.get("password")
    user = authenticate(username=username, password=password)

    if user is not None and user.is_active:
      login(request, user)
      return redirect("/")
    else:
      messages.error(request, "ユーザー名か、パスワードか間違っております。")

    return redirect("page_login")

  else:
    if request.user.is_anonymous:
      return render(request, "login.html")
    else:
      return redirect("/")


def page_error(request):
  return render(request, "404.html")


@login_required
def page_logout(request):
  logout(request)
  return redirect("page_login")
