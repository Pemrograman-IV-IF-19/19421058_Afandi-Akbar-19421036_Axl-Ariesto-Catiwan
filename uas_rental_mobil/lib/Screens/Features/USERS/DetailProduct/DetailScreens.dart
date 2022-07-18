
import 'package:flutter/material.dart';
import 'package:uas_rental_mobil/Components/DetailProduct/DetailProductComponents.dart';

import '../../../../Components/headers_for_sub_menu.dart';
import '../../../../size_config.dart';

class DetailProductscreens extends StatelessWidget {
  static String routeName = "/detail_product";
  static var dataMobil;
  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    dataMobil = ModalRoute.of(context)!.settings.arguments as Map;
    return Scaffold(
        appBar: AppBar(
          automaticallyImplyLeading: false,
          title: HeadersForSubMenu("Detail Product"),
        ),
        body: ProductDetailComponent()
    );
  }
}
