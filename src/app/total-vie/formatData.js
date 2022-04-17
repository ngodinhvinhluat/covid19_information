const worldMap = require('./js/vn-all.json')
const validateString = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
  str = str.replace(/đ/g, 'd')
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
  str = str.replace(/Đ/g, 'D')
  return str
}
const setData = (data) => {
  const newData = {}
  data?.locations.map((item) => {
    return (newData[validateString(item?.name).split(' ').join('') ?? ''] =
      item?.casesToday ?? 0)
  })
  const chartOptions = {
    chart: {
      map: worldMap,
    },
    title: {
      text: 'Highmaps basic demo',
    },
    subtitle: {
      text: 'Source map: World, Miller projection, medium resolution</a>',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    legend: {
      enabled: true,
    },
    colorAxis: {
      min: 0,
    },
    series: [
      {
        type: 'map',
        name: 'Random data',
        states: {
          hover: {
            color: '#ffff',
          },
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        allAreas: false,
        data: [
          ['vn-qn', newData['QuangNinh']],
          ['vn-kh', newData['KhanhHoa']],
          ['vn-tg', newData['TienGiang']],
          ['vn-bv', newData['BaRia–VungTau']],
          ['vn-bu', newData['BinhThuan']],
          ['vn-hc', newData['TP.HoChiMinh']],
          ['vn-br', newData['BenTre']],
          ['vn-st', newData['SocTrang']],
          ['vn-pt', newData['PhuTho']],
          ['vn-yb', newData['YenBai']],
          ['vn-hd', newData['HaiDuong']],
          ['vn-bn', newData['BacNing']],
          ['vn-hy', newData['HungYen']],
          ['vn-nb', newData['NinhBinh']],
          ['vn-hm', newData['HaNam']],
          ['vn-ho', newData['HoaBinh']],
          ['vn-vc', newData['VinhPhuc']],
          ['vn-hn', newData['HaNoi']],
          ['vn-bg', newData['BacGiang']],
          ['vn-tb', newData['ThaiBinh']],
          ['vn-ld', newData['LamDong']],
          ['vn-bp', newData['BinhPhuoc']],
          ['vn-py', newData['PhuYen']],
          ['vn-bd', newData['BinhDinh']],
          ['vn-gl', newData['Gialai']],
          ['vn-qg', newData['QuangNgai']],
          ['vn-dn', newData['DaNang']],
          ['vn-dt', newData['DongThap']],
          ['vn-la', newData['LongAn']],
          ['vn-hp', newData['HaiPhong']],
          ['vn-hag', newData['HaGiang']],
          ['vn-bl', newData['BacLieu']],
          ['vn-vl', newData['VinhLong']],
          ['vn-tn', newData['TayNinh']],
          ['vn-ty', newData['ThaiNguyen']],
          ['vn-li', newData['LaiChau']],
          ['vn-sl', newData['SonLa']],
          ['vn-hg', newData['HauGiang']],
          ['vn-nd', newData['NamDinh']],
          ['vn-ht', newData['HaTinh']],
          ['vn-na', newData['NgheAn']],
          ['vn-qb', newData['QuangBinh']],
          ['vn-dlk', newData['DakLak']],
          ['vn-nt', newData['NinhThuan']],
          ['vn-dkn', newData['DakNong']],
          ['vn-kt', newData['KonTum']],
          ['vn-qnam', newData['QuangNam']],
          ['vn-qt', newData['QuangTri']],
          ['vn-tt', newData['ThuaThienHue']],
          ['vn-da', newData['DaNang']],
          ['vn-ag', newData['AnGiang']],
          ['vn-cm', newData['CaMau']],
          ['vn-tv', newData['TraVinh']],
          ['vn-cb', newData['CaoBang']],
          ['vn-kg', newData['KienGiang']],
          ['vn-lo', newData['LaoCai']],
          ['vn-db', newData['DienBien']],
          ['vn-ls', newData['LangSon']],
          ['vn-th', newData['ThanhHoa']],
          ['vn-bk', newData['BacKan']],
          ['vn-tq', newData['TuyenQuang']],
          ['vn-bi', newData['BinhDuong']],
          ['vn-ct', newData['CanTho']],
        ],
      },
    ],
  }
  console.log()
  return chartOptions
}
module.exports = { setData }
