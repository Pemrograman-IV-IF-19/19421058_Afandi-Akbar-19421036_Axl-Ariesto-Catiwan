import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:uas_rental_mobil/Components/HomeUsers/HomeUsersScreeens.dart';
import 'package:uas_rental_mobil/Components/Transaksi/DetailTransaksiScreens.dart';
import 'package:uas_rental_mobil/Components/headers_for_home.dart';

import '../../../../Components/Keranjang/Keranjangscreens.dart';
import '../../../../Components/Transaksi/TransaksiScreen.dart';
import '../../../../size_config.dart';



class DetailTransaksiPage extends StatelessWidget {
  static String routeName = "/detail_transaksi";
  static var dataTransaksi;

  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    dataTransaksi = ModalRoute.of(context)!.settings.arguments as Map;
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          title: HeadersForHome("Detail Transaksi"),
        ),
        body: DetailTransaksiScreens()
    );
  }
}
