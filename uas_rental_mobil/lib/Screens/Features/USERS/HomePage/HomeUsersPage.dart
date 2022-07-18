import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:uas_rental_mobil/Components/HomeUsers/HomeUsersScreeens.dart';
import 'package:uas_rental_mobil/Components/headers_for_home.dart';

import '../../../../size_config.dart';

class HomeUsersPage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    SizeConfig().init(context);
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        title: HeadersForHome("Rental Mobil"),
      ),
      body: HomeUserComponent()
    );
  }
}
