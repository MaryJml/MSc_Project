// Sample data
const timeline_data = {'02008198': [{'owner_names': ['Owner ID: 1625', 'Owner ID: 2156'], 'start_time': 1498}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1811}, {'owner_names': ['Owner ID: 00021806'], 'start_time': 1820}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1840}], '02014753': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1486}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1815}], '02006857': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1476}, {'owner_names': ['Owner ID: 4085'], 'start_time': 1501}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02019758': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}, {'owner_names': ['Owner ID: 3483'], 'start_time': 1701}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1810}], '02019759': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}, {'owner_names': ['Owner ID: 3483'], 'start_time': 1701}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1810}], '02019761': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}, {'owner_names': ['Owner ID: 3483'], 'start_time': 1701}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1810}], '02019757': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}, {'owner_names': ['Owner ID: 3483'], 'start_time': 1701}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1810}], '02006706': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1811}], '02008341': [{'owner_names': ['Owner ID: 1904', 'Owner ID: 3467'], 'start_time': 1492}, {'owner_names': ['Owner ID: 4085'], 'start_time': 1810}, {'owner_names': ['Owner ID: 00021806'], 'start_time': 1820}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1840}], '02008360': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1477}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02137940': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1490}], '02011873': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1786}, {'owner_names': ['Owner ID: 4240'], 'start_time': 1786}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1802}], '02127882': [{'owner_names': ['Owner ID: 1625'], 'start_time': 1500}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 00010583'], 'start_time': 1701}, {'owner_names': ['Owner ID: 2832'], 'start_time': 1800}], '02006673': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1811}], '02008331': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02007041': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02008348': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1475}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1701}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02108478': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1483}], '02018099': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1495}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}], '02125177': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1493}, {'owner_names': ['Owner ID: 00023820'], 'start_time': 1600}, {'owner_names': ['Owner ID: 00016901'], 'start_time': 1501}, {'owner_names': ['Owner ID: 00016355'], 'start_time': 1700}], '02006674': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018162': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1483}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02108479': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1493}], '02018176': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1490}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018166': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1481}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018102': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1494}], '02125145': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}, {'owner_names': ['Owner ID: 00023820'], 'start_time': 1600}, {'owner_names': ['Owner ID: 00017969'], 'start_time': 1651}, {'owner_names': ['Owner ID: 00016355'], 'start_time': 1700}], '02003644': [{'owner_names': ['Owner ID: 901'], 'start_time': 1501}, {'owner_names': ['Owner ID: 3467', 'Owner ID: 00016768'], 'start_time': 1601}, {'owner_names': ['Owner ID: 00010056'], 'start_time': 1806}], '02008343': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1496}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02018106': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1495}], '02008359': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1483}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02008611': [{'owner_names': ['Owner ID: 1625'], 'start_time': 'Unknown'}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 3601'], 'start_time': 1888}, {'owner_names': ['Owner ID: 1471'], 'start_time': 1958}], '02108480': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1475}], '02017432': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1495}, {'owner_names': ['Owner ID: 4073'], 'start_time': 1886}], '02008246': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1499}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006700': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02008353': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 2699'], 'start_time': 1899}, {'owner_names': ['Owner ID: 00016201'], 'start_time': 1899}], '02108481': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}], '02019417': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}], '02008197': [{'owner_names': ['Owner ID: 1861', 'Owner ID: 3467'], 'start_time': 1497}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02008218': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}], '02018170': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1485}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1811}], '02108482': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00020986'], 'start_time': 1806}], '02008350': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1478}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02008264': [{'owner_names': ['Owner ID: 1875'], 'start_time': 1491}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006705': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}], '00202002': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 694'], 'start_time': 1700}, {'owner_names': ['Owner ID: 00011037'], 'start_time': 1797}], '02145483': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1491}], '02018218': [{'owner_names': ['Owner ID: 1625'], 'start_time': 1493}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1807}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1840}], '02008328': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02008329': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02011875': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1806}], '02008354': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 2590'], 'start_time': 1476}, {'owner_names': ['Owner ID: 00013191'], 'start_time': 1789}, {'owner_names': ['Owner ID: 00014395'], 'start_time': 1792}, {'owner_names': ['Owner ID: 2699', 'Owner ID: 00016201'], 'start_time': 1892}, {'owner_names': ['Owner ID: 00016201'], 'start_time': 'Unknown'}], '02008355': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1789}, {'owner_names': ['Owner ID: 00024367'], 'start_time': 1898}], '02006835': [{'owner_names': ['Owner ID: 1645'], 'start_time': 1581}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1601}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02108483': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1499}], '02006694': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '00214233': [{'owner_names': ['Owner ID: 00021323'], 'start_time': 1478}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1478}, {'owner_names': ['Owner ID: 00015143', 'Owner ID: 4204'], 'start_time': 1797}, {'owner_names': ['Owner ID: 4209'], 'start_time': 1824}], '02011876': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02108484': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1477}], '02018188': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 00017138'], 'start_time': 1484}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02016845': [{'owner_names': ['Owner ID: 00010351'], 'start_time': 1471}, {'owner_names': ['Owner ID: 3467', 'Owner ID: 00010413'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1816}], '02018214': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 00017138'], 'start_time': 1480}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02008361': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006698': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02011878': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1461}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02006764': [{'owner_names': ['Owner ID: 1639', 'Owner ID: 3549'], 'start_time': 1491}, {'owner_names': ['Owner ID: 1638', 'Owner ID: 3467'], 'start_time': 1740}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006685': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02006683': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018229': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1475}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02006747': [{'owner_names': ['Owner ID: 2590'], 'start_time': 1470}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1470}, {'owner_names': ['Owner ID: 00020986'], 'start_time': 1806}, {'owner_names': ['Owner ID: 0011046'], 'start_time': 1873}, {'owner_names': ['Owner ID: 3331'], 'start_time': 1945}, {'owner_names': ['Owner ID: 00015680', 'Owner ID: 3442'], 'start_time': 1986}], '02018221': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 00017138'], 'start_time': 1491}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018108': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1495}], '02018180': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 00017138'], 'start_time': 1484}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02017463': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 00016568'], 'start_time': 1658}, {'owner_names': ['Owner ID: 00016569'], 'start_time': 1698}, {'owner_names': ['Owner ID: 00015181'], 'start_time': 1703}, {'owner_names': ['Owner ID: 00015179'], 'start_time': 1785}], '02006695': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02017555': [{'owner_names': ['Owner ID: 901'], 'start_time': 1496}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1601}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02006702': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02017597': [{'owner_names': ['Owner ID: 4085'], 'start_time': 1485}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1601}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1796}], '02015857': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1550}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1797}, {'owner_names': ['Owner ID: 2832'], 'start_time': 1807}], '02108485': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1472}, {'owner_names': ['Owner ID: 00020986'], 'start_time': 1806}], '02018192': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018168': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1491}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02006704': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02003446': [{'owner_names': ['Owner ID: 901'], 'start_time': 1500}, {'owner_names': ['Owner ID: 3467', 'Owner ID: 00016768'], 'start_time': 1601}, {'owner_names': ['Owner ID: 00010056'], 'start_time': 1806}], '02003447': [{'owner_names': ['Owner ID: 00015557'], 'start_time': 1498}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1600}, {'owner_names': ['Owner ID: 43'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00010056'], 'start_time': 1863}], '02008356': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1475}, {'owner_names': ['Owner ID: 00024367'], 'start_time': 1789}], '02008239': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02017398': [{'owner_names': ['Owner ID: 00021391'], 'start_time': 1489}, {'owner_names': ['Owner ID: 00016518'], 'start_time': 1490}, {'owner_names': ['Owner ID: 00010673'], 'start_time': 1529}, {'owner_names': ['Owner ID: 00016540'], 'start_time': 1653}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1653}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1815}], '02006707': [{'owner_names': ['Owner ID: 1625'], 'start_time': 1498}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02018104': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1480}], '02020126': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1485}, {'owner_names': ['Owner ID: 00018017', 'Owner ID: 00018018'], 'start_time': 1740}, {'owner_names': ['Owner ID: 00017097'], 'start_time': 1875}, {'owner_names': ['Owner ID: 2325'], 'start_time': 1920}, {'owner_names': ['Owner ID: 138'], 'start_time': 1960}], '02108486': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1497}], '02006697': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018230': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1480}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02006689': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02008344': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1475}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02018215': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1489}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02139823': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1797}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02008266': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1499}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02017486': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1472}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02139822': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1797}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02006856': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1475}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02137942': [{'owner_names': ['Owner ID: 1645'], 'start_time': 1581}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1626}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '00200404': [{'owner_names': ['Owner ID: 00020986'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00011615'], 'start_time': 1814}, {'owner_names': ['Owner ID: 00010187'], 'start_time': 1841}, {'owner_names': ['Owner ID: 2381'], 'start_time': 2013}], '02008265': [{'owner_names': ['Owner ID: 1875'], 'start_time': 1491}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00021806'], 'start_time': 1813}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1813}], '02006703': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02018220': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1494}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02008330': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02139835': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}], '02008346': [{'owner_names': ['Owner ID: 00017050'], 'start_time': 1478}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1600}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02127999': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1478}, {'owner_names': ['Owner ID: 4453'], 'start_time': 1806}], '02139836': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}], '02014160': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1700}, {'owner_names': ['Owner ID: 694'], 'start_time': 1701}, {'owner_names': ['Owner ID: 00011037'], 'start_time': 1797}], '02015563': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1893}, {'owner_names': ['Owner ID: 00015896'], 'start_time': 1901}], '02006688': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1810}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}], '02008332': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1479}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006855': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02008357': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 2590'], 'start_time': 1476}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}, {'owner_names': ['Owner ID: 3479'], 'start_time': 1816}], '02017598': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 00016832'], 'start_time': 1806}], '02137941': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1490}], '02126740': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1501}, {'owner_names': ['Owner ID: 2640'], 'start_time': 1800}, {'owner_names': ['Owner ID: 00023301'], 'start_time': 1850}], '02006679': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1489}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00016834'], 'start_time': 1811}], '02017605': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1477}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02008268': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1499}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006699': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1810}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02108487': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1484}], '02018225': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1820}], '02017608': [{'owner_names': ['Owner ID: 1625'], 'start_time': 1498}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 4603'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00016835'], 'start_time': 1946}, {'owner_names': ['Owner ID: 00016836'], 'start_time': 2017}], '02006676': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1472}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1813}, {'owner_names': ['Owner ID: 00014566'], 'start_time': 1831}], '02017609': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1479}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02017610': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1491}, {'owner_names': ['Owner ID: 00012294'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3445'], 'start_time': 1830}, {'owner_names': ['Owner ID: 3331'], 'start_time': 1965}], '00209908': [{'owner_names': ['Owner ID: 1625'], 'start_time': 1499}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 3281'], 'start_time': 1956}, {'owner_names': ['Owner ID: 4209'], 'start_time': 1956}], '02008207': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1469}, {'owner_names': ['Owner ID: 819'], 'start_time': 1701}, {'owner_names': ['Owner ID: 2734'], 'start_time': 1721}], '02018222': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1489}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02017611': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1476}, {'owner_names': ['Owner ID: 3042'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3523'], 'start_time': 1841}], '02018231': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02017613': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1476}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}], '02108488': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00020986'], 'start_time': 1806}], '02006693': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02008349': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1496}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02108490': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1468}], '02018103': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1482}], '02007068': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02006687': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02006696': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02139534': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 4751', 'Owner ID: 00029275'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00029274', 'Owner ID: 00029275'], 'start_time': 1824}], '02108491': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1482}], '02006701': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}], '02008269': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1499}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02017614': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1472}, {'owner_names': ['Owner ID: 00013191'], 'start_time': 1789}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1792}], '02002784': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1493}, {'owner_names': ['Owner ID: 00010056'], 'start_time': 1806}], '02008199': [{'owner_names': ['Owner ID: 1625'], 'start_time': 1494}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1513}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '00200283': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 2334'], 'start_time': 1499}, {'owner_names': ['Owner ID: 00010061'], 'start_time': 1557}, {'owner_names': ['Owner ID: 00010062'], 'start_time': 1601}, {'owner_names': ['Owner ID: 1180'], 'start_time': 1770}, {'owner_names': ['Owner ID: 00010035'], 'start_time': 1810}], '02122654': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1490}, {'owner_names': ['Owner ID: 4086'], 'start_time': 1573}, {'owner_names': ['Owner ID: 00010352'], 'start_time': 1725}, {'owner_names': ['Owner ID: 3479', 'Owner ID: 4016', 'Owner ID: 1112'], 'start_time': 1801}], '02128491': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1499}], '02108493': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}], '02008347': [{'owner_names': ['Owner ID: 3467', 'Owner ID: 00023096'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00013191'], 'start_time': 1789}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1792}], '02139533': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1806}, {'owner_names': ['Owner ID: 00029274', 'Owner ID: 00029275'], 'start_time': 1816}], '02019418': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1474}], '02008335': [{'owner_names': ['Owner ID: 3230'], 'start_time': 1550}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1566}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02108495': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00020986'], 'start_time': 1806}], '02017615': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1471}, {'owner_names': ['Owner ID: 00013191'], 'start_time': 1789}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1792}], '02141391': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1765}], '02018105': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1497}], '02108496': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1476}], '02019400': [{'owner_names': ['Owner ID: 00010673'], 'start_time': 1525}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1600}, {'owner_names': ['Owner ID: 2678'], 'start_time': 1820}, {'owner_names': ['Owner ID: 3551'], 'start_time': 1868}], '02107193': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1481}, {'owner_names': ['Owner ID: 00016556'], 'start_time': 1628}, {'owner_names': ['Owner ID: 2839'], 'start_time': 1773}], '02011874': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1476}, {'owner_names': ['Owner ID: 00014883'], 'start_time': 1797}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1809}], '02017632': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1484}, {'owner_names': ['Owner ID: 00015156'], 'start_time': 1806}], '00206141': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1480}, {'owner_names': ['Owner ID: 4209', 'Owner ID: 00012182'], 'start_time': 1789}], '02107092': [{'owner_names': ['Owner ID: 2590', 'Owner ID: 00025457'], 'start_time': 1460}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1500}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1797}, {'owner_names': ['Owner ID: 2839'], 'start_time': 1815}], '02009688': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1481}, {'owner_names': ['Owner ID: 3466'], 'start_time': 1660}, {'owner_names': ['Owner ID: 3458'], 'start_time': 1848}, {'owner_names': ['Owner ID: 2169', 'Owner ID: 2156'], 'start_time': 1848}, {'owner_names': ['Owner ID: 00028245'], 'start_time': 1890}], '02018224': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1494}, {'owner_names': ['Owner ID: 00017138'], 'start_time': 1806}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1820}], '02018101': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1488}], '02125175': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1493}, {'owner_names': ['Owner ID: 00023820'], 'start_time': 1600}, {'owner_names': ['Owner ID: 00016901'], 'start_time': 1501}, {'owner_names': ['Owner ID: 00016355'], 'start_time': 1700}], '02008352': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1800}, {'owner_names': ['Owner ID: 00015143'], 'start_time': 1806}], '02006771': [{'owner_names': ['Owner ID: 1409'], 'start_time': 1500}, {'owner_names': ['Owner ID: 3467'], 'start_time': 1601}, {'owner_names': ['Owner ID: 1408'], 'start_time': 1801}, {'owner_names': ['Owner ID: 3765'], 'start_time': 1811}], '02108489': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1500}], '02126715': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1472}, {'owner_names': ['Owner ID: 2832'], 'start_time': 1800}], '02108492': [{'owner_names': ['Owner ID: 3467'], 'start_time': 1492}]};
const books = Object.keys(timeline_data);
let selectedBookId = books[0]; // Initialize with the first book ID

// Function to update the list of book checkboxes based on the search filter
function updateBookCheckboxes(filterText) {
    const checkboxDiv = d3.select("#checkboxes2");
    checkboxDiv.selectAll("*").remove(); // Clear existing checkboxes

    books.filter(bookId => bookId.includes(filterText)).forEach(bookId => {
        const checkboxId = `book-${bookId}`; // Prefix to ensure valid id
        const checkbox = checkboxDiv.append("div");

        checkbox.append("input")
            .attr("type", "radio")
            .attr("id", checkboxId)
            .attr("name", "bookCheckbox")
            .attr("value", bookId)
            .on("change", function() {
                selectedBookId = this.value; // Store the selected book ID
                updateTimeline();
            });

        checkbox.append("label")
            .attr("for", checkboxId)
            .text(bookId);
    });
    if (books.includes(selectedBookId)) {
        d3.select(`#book-${selectedBookId}`).property("checked", true);
    } else {
        selectedBookId = null; // No matching book, clear the selection
    }
}

// Search bar functionality
d3.select("#bookFilter").on("input", function() {
    updateBookCheckboxes(this.value);
});

// Initial population of book checkboxes
selectedBookId = books[0];
updateBookCheckboxes('');

// Initial update of the timeline with the first book ID selected
function initialSelection() {
    const firstBookId = books[0];
    d3.select(`#book-${firstBookId}`).property("checked", true);
    updateTimeline();
}

initialSelection();



function updateTimeline() {
    // Clear the previous timeline
    d3.select("#timeline").selectAll("*").remove();

    // Filter data based on checked books
    const selectedBookId = d3.select("input[name='bookCheckbox']:checked").node()?.value;
    if (!selectedBookId) {
        return; // If no book is selected, don't draw the timeline
    }
    const selectedData = [{ bookId: selectedBookId, periods: timeline_data[selectedBookId] }];

    // Define dimensions for the timeline
    const margin = { top: 20, right: 30, bottom: 20, left: 0 },
        width = 790 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

    // Create SVG element
    const timeline_svg = d3.select("#timeline").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Draw the timeline as a horizontal line
    timeline_svg.append("line")
        .attr("x1", 0)
        .attr("y1", height / 2)
        .attr("x2", width)
        .attr("y2", height / 2)
        .style("stroke", "black")
        .style("stroke-width", "2");

    // Draw points and labels for each period
    selectedData.forEach((book, bookIndex) => {
        const yPosition = height / 2;

        // Draw points and labels for each period
        book.periods.forEach((period, periodIndex) => {
            const xPosition = (width / (book.periods.length + 1)) * periodIndex + (width / book.periods.length / 2);
            const yPosition = height / 2;
            const isLastPeriod = periodIndex === book.periods.length - 1; // Check if it's the last period


            // Ensure owner_names is an array
            const ownerNames = Array.isArray(period.owner_names) ? period.owner_names : [period.owner_names];

            // Draw a point for the period
            timeline_svg.append("circle")
                .attr("cx", xPosition)
                .attr("cy", yPosition)
                .attr("r", 5)
                .style("fill", isLastPeriod ? "#FEFE62" : "#D35FB7");

            // Add label for the owner name
            timeline_svg.append("text")
                .attr("x", xPosition)
                .attr("y", yPosition - 10)
                .text(ownerNames.join("; ")) // Use the ensured array here
                .attr("text-anchor", "start") // Anchor at the start of the text
                .attr("dominant-baseline", "hanging") // Align text by the top
                .attr("transform", `translate(0, -10) rotate(-25, ${xPosition}, ${yPosition - 10})`) // Rotate around the point (xPosition, yPosition - 10)
                .style("font-size", "10px");

            // Add label for the selected book ID
            timeline_svg.append("text")
                .attr("x", 5) // Adjust as necessary for your layout
                .attr("y", 0) // Adjust as necessary for your layout
                .text(`Timeline for Book ID: ${selectedBookId}`)
                .attr("class", "timeline-title")
                .style("font-size", "15px") // Adjust as necessary for your styling
                .style("font-weight", "bold");

            // Add label for the start year if it's not 'Unknown'
            if (period.start_time !== 'Unknown') {
                timeline_svg.append("text")
                    .attr("x", xPosition)
                    .attr("y", yPosition + 20)
                    .text(period.start_time)
                    .attr("text-anchor", "middle")
                    .style("font-size", "10px");

            }
        });
    });
}



