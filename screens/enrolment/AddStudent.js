import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ScreenTemplate from "../../components/UI/ScreenTemplate";
import CardUI from "../../components/UI/CardUI";
import ButtonUI from "../../components/UI/ButtonUI";
import { RadioButton } from "react-native-paper";
import DatePickerUI from "../../components/UI/DatePickerUI";
import DropdownUI from "../../components/UI/DropdownUI";
import NumberInput from "../../components/UI/NumberInput";
import moment from 'moment';
const AddStudent = () => {
    const countries=[
      {label: 'Afghanistan', value: 'Afghanistan'}, 
      {label: 'Åland Islands', value: 'Åland Islands'}, 
      {label: 'Albania', value: 'Albania'}, 
      {label: 'Algeria', value: 'Algeria'}, 
      {label: 'American Samoa', value: 'American Samoa'}, 
      {label: 'AndorrA', value: 'AD'}, 
      {label: 'Angola', value: 'AO'}, 
      {label: 'Anguilla', value: 'AI'}, 
      {label: 'Antarctica', value: 'AQ'}, 
      {label: 'Antigua and Barbuda', value: 'AG'}, 
      {label: 'Argentina', value: 'AR'}, 
      {label: 'Armenia', value: 'AM'}, 
      {label: 'Aruba', value: 'AW'}, 
      {label: 'Australia', value: 'AU'}, 
      {label: 'Austria', value: 'AT'}, 
      {label: 'Azerbaijan', value: 'AZ'}, 
      {label: 'Bahamas', value: 'BS'}, 
      {label: 'Bahrain', value: 'BH'}, 
      {label: 'Bangladesh', value: 'BD'}, 
      {label: 'Barbados', value: 'BB'}, 
      {label: 'Belarus', value: 'BY'}, 
      {label: 'Belgium', value: 'BE'}, 
      {label: 'Belize', value: 'BZ'}, 
      {label: 'Benin', value: 'BJ'}, 
      {label: 'Bermuda', value: 'BM'}, 
      {label: 'Bhutan', value: 'BT'}, 
      {label: 'Bolivia', value: 'BO'}, 
      {label: 'Bosnia and Herzegovina', value: 'BA'}, 
      {label: 'Botswana', value: 'BW'}, 
      {label: 'Bouvet Island', value: 'BV'}, 
      {label: 'Brazil', value: 'BR'}, 
      {label: 'British Indian Ocean Territory', value: 'IO'}, 
      {label: 'Brunei Darussalam', value: 'BN'}, 
      {label: 'Bulgaria', value: 'BG'}, 
      {label: 'Burkina Faso', value: 'BF'}, 
      {label: 'Burundi', value: 'BI'}, 
      {label: 'Cambodia', value: 'KH'}, 
      {label: 'Cameroon', value: 'CM'}, 
      {label: 'Canada', value: 'CA'}, 
      {label: 'Cape Verde', value: 'CV'}, 
      {label: 'Cayman Islands', value: 'KY'}, 
      {label: 'Central African Republic', value: 'CF'}, 
      {label: 'Chad', value: 'TD'}, 
      {label: 'Chile', value: 'CL'}, 
      {label: 'China', value: 'CN'}, 
      {label: 'Christmas Island', value: 'CX'}, 
      {label: 'Cocos (Keeling) Islands', value: 'CC'}, 
      {label: 'Colombia', value: 'CO'}, 
      {label: 'Comoros', value: 'KM'}, 
      {label: 'Congo', value: 'CG'}, 
      {label: 'Congo, The Democratic Republic of the', value: 'CD'}, 
      {label: 'Cook Islands', value: 'CK'}, 
      {label: 'Costa Rica', value: 'CR'}, 
      {label: 'Cote D\'Ivoire', value: 'CI'}, 
      {label: 'Croatia', value: 'HR'}, 
      {label: 'Cuba', value: 'CU'}, 
      {label: 'Cyprus', value: 'CY'}, 
      {label: 'Czech Republic', value: 'CZ'}, 
      {label: 'Denmark', value: 'DK'}, 
      {label: 'Djibouti', value: 'DJ'}, 
      {label: 'Dominica', value: 'DM'}, 
      {label: 'Dominican Republic', value: 'DO'}, 
      {label: 'Ecuador', value: 'EC'}, 
      {label: 'Egypt', value: 'EG'}, 
      {label: 'El Salvador', value: 'SV'}, 
      {label: 'Equatorial Guinea', value: 'GQ'}, 
      {label: 'Eritrea', value: 'ER'}, 
      {label: 'Estonia', value: 'EE'}, 
      {label: 'Ethiopia', value: 'ET'}, 
      {label: 'Falkland Islands (Malvinas)', value: 'FK'}, 
      {label: 'Faroe Islands', value: 'FO'}, 
      {label: 'Fiji', value: 'FJ'}, 
      {label: 'Finland', value: 'FI'}, 
      {label: 'France', value: 'FR'}, 
      {label: 'French Guiana', value: 'GF'}, 
      {label: 'French Polynesia', value: 'PF'}, 
      {label: 'French Southern Territories', value: 'TF'}, 
      {label: 'Gabon', value: 'GA'}, 
      {label: 'Gambia', value: 'GM'}, 
      {label: 'Georgia', value: 'GE'}, 
      {label: 'Germany', value: 'DE'}, 
      {label: 'Ghana', value: 'GH'}, 
      {label: 'Gibraltar', value: 'GI'}, 
      {label: 'Greece', value: 'GR'}, 
      {label: 'Greenland', value: 'GL'}, 
      {label: 'Grenada', value: 'GD'}, 
      {label: 'Guadeloupe', value: 'GP'}, 
      {label: 'Guam', value: 'GU'}, 
      {label: 'Guatemala', value: 'GT'}, 
      {label: 'Guernsey', value: 'GG'}, 
      {label: 'Guinea', value: 'GN'}, 
      {label: 'Guinea-Bissau', value: 'GW'}, 
      {label: 'Guyana', value: 'GY'}, 
      {label: 'Haiti', value: 'HT'}, 
      {label: 'Heard Island and Mcdonald Islands', value: 'HM'}, 
      {label: 'Holy See (Vatican City State)', value: 'VA'}, 
      {label: 'Honduras', value: 'HN'}, 
      {label: 'Hong Kong', value: 'HK'}, 
      {label: 'Hungary', value: 'HU'}, 
      {label: 'Iceland', value: 'IS'}, 
      {label: 'India', value: 'IN'}, 
      {label: 'Indonesia', value: 'ID'}, 
      {label: 'Iran, Islamic Republic Of', value: 'IR'}, 
      {label: 'Iraq', value: 'IQ'}, 
      {label: 'Ireland', value: 'IE'}, 
      {label: 'Isle of Man', value: 'IM'}, 
      {label: 'Israel', value: 'IL'}, 
      {label: 'Italy', value: 'IT'}, 
      {label: 'Jamaica', value: 'JM'}, 
      {label: 'Japan', value: 'JP'}, 
      {label: 'Jersey', value: 'JE'}, 
      {label: 'Jordan', value: 'JO'}, 
      {label: 'Kazakhstan', value: 'KZ'}, 
      {label: 'Kenya', value: 'KE'}, 
      {label: 'Kiribati', value: 'KI'}, 
      {label: 'Korea, Democratic People\'S Republic of', value: 'KP'}, 
      {label: 'Korea, Republic of', value: 'KR'}, 
      {label: 'Kuwait', value: 'KW'}, 
      {label: 'Kyrgyzstan', value: 'KG'}, 
      {label: 'Lao People\'S Democratic Republic', value: 'LA'}, 
      {label: 'Latvia', value: 'LV'}, 
      {label: 'Lebanon', value: 'LB'}, 
      {label: 'Lesotho', value: 'LS'}, 
      {label: 'Liberia', value: 'LR'}, 
      {label: 'Libyan Arab Jamahiriya', value: 'LY'}, 
      {label: 'Liechtenstein', value: 'LI'}, 
      {label: 'Lithuania', value: 'LT'}, 
      {label: 'Luxembourg', value: 'LU'}, 
      {label: 'Macao', value: 'MO'}, 
      {label: 'Macedonia, The Former Yugoslav Republic of', value: 'MK'}, 
      {label: 'Madagascar', value: 'MG'}, 
      {label: 'Malawi', value: 'MW'}, 
      {label: 'Malaysia', value: 'MY'}, 
      {label: 'Maldives', value: 'MV'}, 
      {label: 'Mali', value: 'ML'}, 
      {label: 'Malta', value: 'MT'}, 
      {label: 'Marshall Islands', value: 'MH'}, 
      {label: 'Martinique', value: 'MQ'}, 
      {label: 'Mauritania', value: 'MR'}, 
      {label: 'Mauritius', value: 'MU'}, 
      {label: 'Mayotte', value: 'YT'}, 
      {label: 'Mexico', value: 'MX'}, 
      {label: 'Micronesia, Federated States of', value: 'FM'}, 
      {label: 'Moldova, Republic of', value: 'MD'}, 
      {label: 'Monaco', value: 'MC'}, 
      {label: 'Mongolia', value: 'MN'}, 
      {label: 'Montserrat', value: 'MS'}, 
      {label: 'Morocco', value: 'MA'}, 
      {label: 'Mozambique', value: 'MZ'}, 
      {label: 'Myanmar', value: 'MM'}, 
      {label: 'Namibia', value: 'NA'}, 
      {label: 'Nauru', value: 'NR'}, 
      {label: 'Nepal', value: 'NP'}, 
      {label: 'Netherlands', value: 'NL'}, 
      {label: 'Netherlands Antilles', value: 'AN'}, 
      {label: 'New Caledonia', value: 'NC'}, 
      {label: 'New Zealand', value: 'NZ'}, 
      {label: 'Nicaragua', value: 'NI'}, 
      {label: 'Niger', value: 'NE'}, 
      {label: 'Nigeria', value: 'NG'}, 
      {label: 'Niue', value: 'NU'}, 
      {label: 'Norfolk Island', value: 'NF'}, 
      {label: 'Northern Mariana Islands', value: 'MP'}, 
      {label: 'Norway', value: 'NO'}, 
      {label: 'Oman', value: 'OM'}, 
      {label: 'Pakistan', value: 'PK'}, 
      {label: 'Palau', value: 'PW'}, 
      {label: 'Palestinian Territory, Occupied', value: 'PS'}, 
      {label: 'Panama', value: 'PA'}, 
      {label: 'Papua New Guinea', value: 'PG'}, 
      {label: 'Paraguay', value: 'PY'}, 
      {label: 'Peru', value: 'PE'}, 
      {label: 'Philippines', value: 'PH'}, 
      {label: 'Pitcairn', value: 'PN'}, 
      {label: 'Poland', value: 'PL'}, 
      {label: 'Portugal', value: 'PT'}, 
      {label: 'Puerto Rico', value: 'PR'}, 
      {label: 'Qatar', value: 'QA'}, 
      {label: 'Reunion', value: 'RE'}, 
      {label: 'Romania', value: 'RO'}, 
      {label: 'Russian Federation', value: 'RU'}, 
      {label: 'RWANDA', value: 'RW'}, 
      {label: 'Saint Helena', value: 'SH'}, 
      {label: 'Saint Kitts and Nevis', value: 'KN'}, 
      {label: 'Saint Lucia', value: 'LC'}, 
      {label: 'Saint Pierre and Miquelon', value: 'PM'}, 
      {label: 'Saint Vincent and the Grenadines', value: 'VC'}, 
      {label: 'Samoa', value: 'WS'}, 
      {label: 'San Marino', value: 'SM'}, 
      {label: 'Sao Tome and Principe', value: 'ST'}, 
      {label: 'Saudi Arabia', value: 'SA'}, 
      {label: 'Senegal', value: 'SN'}, 
      {label: 'Serbia and Montenegro', value: 'CS'}, 
      {label: 'Seychelles', value: 'SC'}, 
      {label: 'Sierra Leone', value: 'SL'}, 
      {label: 'Singapore', value: 'SG'}, 
      {label: 'Slovakia', value: 'SK'}, 
      {label: 'Slovenia', value: 'SI'}, 
      {label: 'Solomon Islands', value: 'SB'}, 
      {label: 'Somalia', value: 'SO'}, 
      {label: 'South Africa', value: 'ZA'}, 
      {label: 'South Georgia and the South Sandwich Islands', value: 'GS'}, 
      {label: 'Spain', value: 'ES'}, 
      {label: 'Sri Lanka', value: 'LK'}, 
      {label: 'Sudan', value: 'SD'}, 
      {label: 'Suriname', value: 'SR'}, 
      {label: 'Svalbard and Jan Mayen', value: 'SJ'}, 
      {label: 'Swaziland', value: 'SZ'}, 
      {label: 'Sweden', value: 'SE'}, 
      {label: 'Switzerland', value: 'CH'}, 
      {label: 'Syrian Arab Republic', value: 'SY'}, 
      {label: 'Taiwan, Province of China', value: 'TW'}, 
      {label: 'Tajikistan', value: 'TJ'}, 
      {label: 'Tanzania, United Republic of', value: 'TZ'}, 
      {label: 'Thailand', value: 'TH'}, 
      {label: 'Timor-Leste', value: 'TL'}, 
      {label: 'Togo', value: 'TG'}, 
      {label: 'Tokelau', value: 'TK'}, 
      {label: 'Tonga', value: 'TO'}, 
      {label: 'Trinidad and Tobago', value: 'TT'}, 
      {label: 'Tunisia', value: 'TN'}, 
      {label: 'Turkey', value: 'TR'}, 
      {label: 'Turkmenistan', value: 'TM'}, 
      {label: 'Turks and Caicos Islands', value: 'TC'}, 
      {label: 'Tuvalu', value: 'TV'}, 
      {label: 'Uganda', value: 'UG'}, 
      {label: 'Ukraine', value: 'UA'}, 
      {label: 'United Arab Emirates', value: 'AE'}, 
      {label: 'United Kingdom', value: 'GB'}, 
      {label: 'United States', value: 'US'}, 
      {label: 'United States Minor Outlying Islands', value: 'UM'}, 
      {label: 'Uruguay', value: 'Uruguay'}, 
      {label: 'Uzbekistan', value: 'Uzbekistan'}, 
      {label: 'Vanuatu', value: 'Vanuatu'}, 
      {label: 'Venezuela', value: 'Venezuela'}, 
      {label: 'Viet Nam', value: 'Viet Nam'}, 
      {label: 'Virgin Islands, British', value: 'VVirgin Islands, British'}, 
      {label: 'Virgin Islands, U.S.', value: 'Virgin Islands, U.S.'}, 
      {label: 'Wallis and Futuna', value: 'Wallis and Futuna'}, 
      {label: 'Western Sahara', value: 'Western Sahara'}, 
      {label: 'Yemen', value: 'Yemen'}, 
      {label: 'Zambia', value: 'Zambia'}, 
      {label: 'Zimbabwe', value: 'Zimbabwe'} 
  ]
  const data = [
    { label: "yes", value: "1" },
    { label: "no", value: "0" },
  ]
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfAdmission, setDateOfAdmission] = useState(""); 
  const [countryOfOrigin, setCountryOfOrigin] = useState("");
  const [seeingValue, setSeeingValue] = useState("0");
  const [hearingValue, setHearingValue] = useState("0");
  const [selfcareValue, setSelfcareValue]= useState("0");
  const [rememberingValue, setRememberingValue]= useState("0");
  const [communicatingValue, setCommunicatingValue]=useState("0");
  const [stSpecialNeeds, setStSpecialNeeds] = useState("0");
  const [NoppleLMale, setNoppleLMale] = useState(0);
  const [NoppleLMaleUnder18, setNoppleLMaleUnder18] = useState(0);
  const [NoppleLFemale, setNoppleLFemale] = useState(0);
  const [NoppleLFemaleUnder18, setNoppleLFemaleUnder18] = useState(0);
  const [Disability, setDisability] = useState(0);
  const[pgornursing, sethealth]=useState("");
  const[consent, setConsent]=useState("");
  

  useEffect(() => {
    // Update stSpecialNeeds based on the selected values
    const hasSpecialNeeds =
      seeingValue === "1" ||
      hearingValue === "1" ||
      selfcareValue === "1" ||
      rememberingValue === "1" ||
      communicatingValue === "1" /* || ... Repeat for other conditions */;
    
    // Set stSpecialNeeds to "1" if there are special needs, otherwise set it to "0"
    setStSpecialNeeds(hasSpecialNeeds ? "1" : "0");
  }, [seeingValue, hearingValue, selfcareValue, rememberingValue, communicatingValue]);

  const handleDropdownSelect = (field, value) => {
    switch (field) {
      case "seeing":
        setSeeingValue(value);
        break;
      case "hearing":
        setHearingValue(value);
        break;
      case "Self-care":
        setSelfcareValue(value);
        break;
      case "Remembering":
        setRememberingValue(value);
        break;
      case "Communicating":
        setCommunicatingValue(value);
        break;
      default:
        break;
    }
  };
  
  const Dater=moment(dateOfAdmission, 'DD-MM-YY').format('YY-MM-DD');
  
  const handleAddStudent = () => {

    // Replace 'http://localhost:3000' with your actual backend URL
    const backendURL = 'http://35.244.58.160/mobile-api';
    const trimmedMiddleName = middleName.trim();


    const requestData = {
      stGender: gender,
      stFName: firstName.trim(),
      stMNames: trimmedMiddleName,
      stLName: lastName.trim(),
      stDOA: Dater,
      stOrigin: countryOfOrigin,
      stSpecialNeeds,
      NoppleLMale,
      NoppleLMaleUnder18, 
      NoppleLFemale,
      NoppleLFemaleUnder18,
      Disability,
      stPngornurs: pgornursing,
      stConsent: consent,
  
    };
  
    console.log('Data being sent to the server:', requestData);
    
    fetch(`${backendURL}/addStudent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        stGender: gender,
        stFName: firstName.trim(),
        stMNames: trimmedMiddleName,
        stLName: lastName.trim(),
        stDOA: Dater,
        stOrigin: countryOfOrigin,
        stSpecialNeeds,       
        NoppleLMale,
        NoppleLMaleUnder18,
        NoppleLFemale,
        NoppleLFemaleUnder18,
        Disability,
        stPngornurs: pgornursing,
        stConsent: consent,

      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Student added successfully:', data);
        // You can add additional logic here, such as displaying a success message
      })
      .catch((error) => {
        console.error('Error adding student:', error);
        // You can add additional logic here, such as displaying an error message
      });
  };

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <CardUI>
          <Text style={styles.text}>Learner's Full Names:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Middle Name"
            value={middleName}
            onChangeText={setMiddleName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
            <View style={styles.row}>
            <Text style={styles.text}>Gender:</Text>
            <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
              <View style={styles.row}>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="M" />
                  <Text style={styles.smallText}>Male</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="F" />
                  <Text style={styles.smallText}>Female</Text>
                </View>
              </View>
            </RadioButton.Group>
            </View>
            <Text style={styles.text}>Date of Birth:</Text>
            <DatePickerUI  onDateChange={(date) => setDateOfAdmission(date)}/>
            <Text style={styles.text}>Country of Origin:</Text>
            <DropdownUI
              placeholder="Select Country"
              data={countries}
              onSelect={(value) => {
                console.log('Selected Country:', value);
                setCountryOfOrigin(value);
                console.log('Current Country of Origin State:', countryOfOrigin);
              }}
            />
            <Text style={styles.text}>
              Learner's Functional Difficulties Characteristics:
            </Text>
            <View style={styles.dropdownRow}>
              <Text>Seeing</Text>
              <View style={styles.dropdown}>
                <DropdownUI
                  data={data}
                  placeholder={"Select one"}
                  onSelect={(value) => handleDropdownSelect("seeing", value)}
                />
              </View>
            </View>
            <View style={styles.dropdownRow}>
              <Text>Hearing</Text>
              <View style={styles.dropdown}>
                <DropdownUI
                  data={data}
                  placeholder={"Select one"}
                  onSelect={(value) => handleDropdownSelect("hearing", value)}
                />
              </View>
            </View>
            <View style={styles.dropdownRow}>
              <Text>Self-care</Text>
              <View style={styles.dropdown}>
                <DropdownUI
                  data={data}
                  placeholder={"Select one"}
                  onSelect={(value) => handleDropdownSelect("Self-care", value)}
                />
              </View>
            </View>
            <View style={styles.dropdownRow}>
              <Text>Remembering</Text>
              <View style={styles.dropdown}>
                <DropdownUI
                  data={data}
                  placeholder={"Select one"}
                  onSelect={(value) => handleDropdownSelect("Remembering", value)}
                />
              </View>
            </View>
            <View style={styles.dropdownRow}>
              <Text>Communicating</Text>
              <View style={styles.dropdown}>
                <DropdownUI
                  data={data}
                  placeholder={"Select one"}
                  onSelect={(value) => handleDropdownSelect("Communicating", value)}
                />
              </View>
            </View>
            <Text style={styles.text}>
            Number of people in learners household:
          </Text>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Male Adult </Text>
            <NumberInput
              value={NoppleLMale}
              onChange={(value) => setNoppleLMale(value)}
            />
            <Text style={styles.smallText}>Female Adult </Text>
            <NumberInput
              value={NoppleLFemale}
              onChange={(value) => setNoppleLFemale(value)}
            />
          </View>
          <View style={styles.choiceRow}>
            <Text style={styles.smallText}>Male below 18 </Text>
            <NumberInput
              value={NoppleLMaleUnder18}
              onChange={(value) => setNoppleLMaleUnder18(value)}
            />
            <Text style={styles.smallText}>Female below 18 </Text>
            <NumberInput
              value={NoppleLFemaleUnder18}
              onChange={(value) => setNoppleLFemaleUnder18(value)}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text style={styles.smallText}>With disability</Text>
            <NumberInput
              value={Disability}
              onChange={(value) => setDisability(value)}
            />
          </View>
          <Text style={styles.text}>Is the Learner Pregnant or Nursing </Text>
          <RadioButton.Group onValueChange={(value) => sethealth(value)} value={pgornursing}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View style={styles.radioButtonContainer}>
                <RadioButton
                  value="yes"
                />
                <Text style={styles.smallText}>Yes</Text>
              </View>
              <View style={styles.radioButtonContainer}>
              <RadioButton
              value="no"

              />
                <Text style={styles.smallText}>No</Text>
              </View>
            </View>
          </RadioButton.Group >
          <View style={styles.numberRow}>
            <Text style={styles.text}>Guardian's Phone Number</Text>
            <NumberInput maxLength={10} />
          </View>
          <Text style={styles.text}>Gave Consent?</Text>
          <RadioButton.Group onValueChange={(value) => setConsent(value)} value={consent}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View style={styles.radioButtonContainer}>
              <RadioButton
              value="consent yes"
              />
                <Text style={styles.smallText}>Yes</Text>
              </View>
              <View style={styles.radioButtonContainer}>
              <RadioButton
              value="consent no"
              />
                <Text style={styles.smallText}>No</Text>
              </View>
            </View>
          </RadioButton.Group>
            <View style={styles.btnContainer}>             
          <ButtonUI onPress={handleAddStudent}>Submit</ButtonUI>
          </View>
        </CardUI>
      </View>
    </ScreenTemplate>
  );
};
export default AddStudent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 7,
    height: 40,
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 8,
  },
  text: {
    marginVertical: 10,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  smallText: {
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    gap: 20,
  },
  dropdownRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  dropdown: {
    width: 150,
  },
  smallText: {
    fontSize: 12,
  },
  choiceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    justifyContent: "space-between",
    marginVertical: 10,
  },
  btnContainer: {
    alignItems: "center",
    margin: 10,
  },
  numberRow:{
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center'
  }
});
