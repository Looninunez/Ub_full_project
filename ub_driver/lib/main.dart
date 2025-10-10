import 'package:flutter/material.dart';
import 'screens/login_screen.dart';
void main() { runApp(const UbApp()); }
class UbApp extends StatelessWidget { const UbApp({super.key}); @override Widget build(BuildContext context) { return MaterialApp(title:'Ub Driver', theme: ThemeData(scaffoldBackgroundColor: Colors.black), home: const LoginScreen()); } }
