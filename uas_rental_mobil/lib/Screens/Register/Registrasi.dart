import 'package:flutter/material.dart';
import 'package:uas_rental_mobil/Components/Register/RegisterComponent.dart';
import 'package:uas_rental_mobil/size_config.dart';
import 'package:uas_rental_mobil/utils/constants.dart';

class RegisterScreen extends StatelessWidget{

  static String routeName = '/sign_up';

  @override
  Widget build(BuildContext context){
    SizeConfig().init(context);
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
      ),
      body: RegisterComponent(),
    );
  }
}