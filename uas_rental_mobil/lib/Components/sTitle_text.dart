import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../utils/constants.dart';

class STitleText extends StatelessWidget {
  final String text;
  final double fontSize;
  final Color color;
  final FontWeight fontWeight;
  const STitleText(
      {Key? key,
      required this.text,
      this.fontSize = 14,
      this.color = mSubtitleColor,
      this.fontWeight = FontWeight.w600})
      : super(key: key);

  
  @override
  Widget build(BuildContext context) {
    return Text(text,
        style: GoogleFonts.muli(
            fontSize: fontSize, fontWeight: fontWeight, color: color));
  }
}
