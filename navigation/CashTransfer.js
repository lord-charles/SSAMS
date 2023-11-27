import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PupilValidation from "../screens/cash-transfer/PupilValidation";
import Eligibility from "../screens/cash-transfer/Eligibility"

const CashTransfer = () => {
  const CashTransfer = createNativeStackNavigator();

  return (
    <CashTransfer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
    <CashTransfer.Screen
      options={{
        headerShown: false
      }}
        name="PupilValidation"
        component={PupilValidation}
      />
 <CashTransfer.Screen options={{
        title: 'Eligible Girls'
      }} name="Eligibility" component={Eligibility} />
    </CashTransfer.Navigator>
  );
};

export default CashTransfer;

