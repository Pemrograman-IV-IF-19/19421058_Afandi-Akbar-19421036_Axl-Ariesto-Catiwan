import 'package:flutter/cupertino.dart';
import 'package:uas_rental_mobil/Screens/Features/USERS/HomeUsers.dart';
import 'package:uas_rental_mobil/Screens/Login/LoginScreens.dart';
import 'Screens/Features/USERS/DetailProduct/DetailScreens.dart';
import 'Screens/Features/USERS/Transaksi/DetailTransaksi.dart';
import 'Screens/Register/Registrasi.dart';


final Map<String, WidgetBuilder> routes = {
  LoginScreen.routeName: (context) => LoginScreen(),
  RegisterScreen.routeName: (context) => RegisterScreen(),

  //home users
  HomeUsers.routeName: (context) => HomeUsers(),
  DetailProductscreens.routeName: (context) => DetailProductscreens(),
  DetailTransaksiPage.routeName: (context) => DetailTransaksiPage(),
};
