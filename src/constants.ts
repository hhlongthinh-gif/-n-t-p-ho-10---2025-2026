/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: number;
  section: string;
  text: string;
  options: string[];
  correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
}

export const QUESTIONS: Question[] = [
  // PHẦN I
  {
    id: 1,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Trong phản ứng: $MnO_2 + 4HCl \\rightarrow MnCl_2 + Cl_2 + 2H_2O$, vai trò của $HCl$ là",
    options: ["Chất oxi hóa.", "Chất khử.", "Vừa là chất khử, vừa là môi trường.", "Vừa là chất oxi hóa, vừa là môi trường."],
    correctAnswer: 2,
    explanation: "$Cl$ trong $HCl$ có số oxi hóa -1 tăng lên 0 trong $Cl_2$ (đóng vai trò chất khử) và một phần $Cl$ vẫn giữ nguyên số oxi hóa -1 trong $MnCl_2$ (đóng vai trò môi trường)."
  },
  {
    id: 2,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Số oxi hóa của Chlorine trong hợp chất $KClO_3$ là",
    options: ["-1", "+3", "+5", "+7"],
    correctAnswer: 2,
    explanation: "Trong $KClO_3$: $(+1) + x + 3(-2) = 0 \\Rightarrow x = +5$."
  },
  {
    id: 3,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Phản ứng nào sau đây là phản ứng tỏa nhiệt?",
    options: [
      "Phản ứng nhiệt phân $KClO_3$.",
      "Phản ứng hòa tan $NH_4Cl$ vào nước làm nước lạnh đi.",
      "Phản ứng đốt cháy cồn ($C_2H_5OH$).",
      "Phản ứng nung vôi ($CaCO_3 \\rightarrow CaO + CO_2$)."
    ],
    correctAnswer: 2,
    explanation: "Các phản ứng cháy, phản ứng oxi hóa chậm thường là phản ứng tỏa nhiệt. Đốt cháy cồn giải phóng năng lượng dưới dạng nhiệt."
  },
  {
    id: 4,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Cho phương trình: $N_2(g) + O_2(g) \\rightarrow 2NO(g)$ có $\\Delta_rH^o_{298} = +180,6 \\text{ kJ}$. Biến thiên enthalpy chuẩn để tạo thành 1 mol $NO(g)$ là",
    options: ["+180,6 kJ.", "-180,6 kJ.", "+90,3 kJ.", "-90,3 kJ."],
    correctAnswer: 2,
    explanation: "Biến thiên enthalpy cho 2 mol $NO$ là $+180,6$ kJ. Vậy cho 1 mol $NO$ là $+180,6 / 2 = +90,3$ kJ."
  },
  {
    id: 5,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Cho phản ứng: $2CO(g) + O_2(g) \\rightarrow 2CO_2(g)$. Biết nhiệt tạo thành chuẩn của $CO$ là -110,5 kJ/mol và của $CO_2$ là -393,5 kJ/mol. Giá trị $\\Delta_rH^o_{298}$ của phản ứng là",
    options: ["-283,0 kJ.", "-566,0 kJ.", "+566,0 kJ.", "-504,0 kJ."],
    correctAnswer: 1,
    explanation: "$\\Delta_rH^o_{298} = 2 \\times (-393,5) - [2 \\times (-110,5) + 0] = -787 + 221 = -566,0$ kJ."
  },
  {
    id: 6,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Tổng hệ số (số nguyên, tối giản) của các chất tham gia trong phương trình sau là bao nhiêu?\n$Mg + H_2SO_{4(đặc)} \\rightarrow MgSO_4 + H_2S + H_2O$",
    options: ["5", "9", "10", "13"],
    correctAnswer: 1,
    explanation: "Cân bằng: $4Mg + 5H_2SO_4 \\rightarrow 4MgSO_4 + H_2S + 4H_2O$. Tổng hệ số chất tham gia: $4 + 5 = 9$."
  },
  // PHẦN II
  {
    id: 7,
    section: "PHẦN II. CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Để bảo quản thực phẩm tươi lâu hơn, người ta thường cho thực phẩm vào tủ lạnh. Yếu tố nào đã được vận dụng để làm giảm tốc độ phân hủy thực phẩm?",
    options: ["Nồng độ.", "Nhiệt độ.", "Áp suất.", "Diện tích tiếp xúc."],
    correctAnswer: 1,
    explanation: "Nhiệt độ thấp trong tủ lạnh làm giảm tốc độ các phản ứng phân hủy thực phẩm và sự phát triển của vi khuẩn."
  },
  {
    id: 8,
    section: "PHẦN II. CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Một phản ứng có hệ số nhiệt độ Van't Hoff $\\gamma = 2$. Nếu tăng nhiệt độ từ $30^oC$ lên $60^oC$ thì tốc độ phản ứng tăng lên bao nhiêu lần?",
    options: ["4 lần.", "6 lần.", "8 lần.", "3 lần."],
    correctAnswer: 2,
    explanation: "$v_2/v_1 = \\gamma^{(T_2-T_1)/10} = 2^{(60-30)/10} = 2^3 = 8$."
  },
  {
    id: 9,
    section: "PHẦN II. CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Nồng độ ban đầu của chất A là 0,8 M. Sau 10 giây, nồng độ của A còn lại 0,2 M. Tốc độ trung bình của phản ứng tính theo chất A là",
    options: ["0,06 mol/(L.s).", "0,60 mol/(L.s).", "0,02 mol/(L.s).", "0,08 mol/(L.s)."],
    correctAnswer: 0,
    explanation: "$v = |(0,2 - 0,8)| / 10 = 0,06$ mol/(L.s)."
  },
  {
    id: 10,
    section: "PHẦN II. CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Khi muốn than cháy nhanh hơn và mạnh hơn, người ta thường đập nhỏ than. Việc làm này tác động đến yếu tố nào?",
    options: ["Tăng nhiệt độ phản ứng.", "Tăng nồng độ Oxygen.", "Tăng diện tích tiếp xúc.", "Sử dụng chất xúc tác."],
    correctAnswer: 2,
    explanation: "Đập nhỏ than làm tăng diện tích tiếp xúc giữa than (carbon) và Oxygen trong không khí, giúp phản ứng cháy diễn ra nhanh hơn."
  },
  // PHẦN III
  {
    id: 11,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Trong nhóm Halogen, nguyên tố có tính phi kim mạnh nhất là",
    options: ["Fluorine.", "Chlorine.", "Bromine.", "Iodine."],
    correctAnswer: 0,
    explanation: "Trong một nhóm A, đi từ trên xuống dưới tính phi kim giảm dần. Fluorine ở đầu nhóm nên tính phi kim mạnh nhất (độ âm điện lớn nhất)."
  },
  {
    id: 12,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Dung dịch acid nào sau đây không được đựng trong bình thủy tinh do khả năng ăn mòn thủy tinh?",
    options: ["$HCl$.", "$HBr$.", "$HI$.", "$HF$."],
    correctAnswer: 3,
    explanation: "Acid HF có khả năng hòa tan $SiO_2$ trong thủy tinh: $SiO_2 + 4HF \\rightarrow SiF_4 + 2H_2O$."
  },
  {
    id: 13,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Thứ tự giảm dần tính acid của các hydrohalic acid (HX) là",
    options: ["$HF > HCl > HBr > HI$.", "$HI > HBr > HCl > HF$.", "$HCl > HBr > HI > HF$.", "$HF > HI > HBr > HCl$."],
    correctAnswer: 1,
    explanation: "Từ HF đến HI, độ dài liên kết H-X tăng, năng lượng liên kết giảm nên khả năng phân li ra $H^+$ tăng $\\Rightarrow$ tính acid tăng dần."
  },
  {
    id: 14,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Cho vài giọt dung dịch $AgNO_3$ vào ống nghiệm chứa dung dịch $NaCl$, hiện tượng quan sát được là",
    options: ["Có kết tủa màu vàng đậm.", "Có kết tủa màu trắng.", "Có bọt khí thoát ra.", "Không có hiện tượng gì."],
    correctAnswer: 1,
    explanation: "$AgNO_3 + NaCl \\rightarrow AgCl\\downarrow (trắng) + NaNO_3$."
  },
  {
    id: 15,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Cho các dung dịch: $NaF, NaCl, NaBr, NaI$. Số dung dịch tạo được kết tủa khi tác dụng với $AgNO_3$ là",
    options: ["1", "2", "3", "4"],
    correctAnswer: 2,
    explanation: "AgF tan, AgCl (trắng), AgBr (vàng nhạt), AgI (vàng đậm) là kết tủa. Có 3 dung dịch tạo kết tủa."
  },
  {
    id: 16,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Cho 5,6 gam sắt ($Fe$) tác dụng hoàn toàn với khí $Cl_2$ dư nung nóng. Khối lượng muối thu được là",
    options: ["12,70 gam.", "16,25 gam.", "11,25 gam.", "8,12 gam."],
    correctAnswer: 1,
    explanation: "$2Fe + 3Cl_2 \\rightarrow 2FeCl_3$. nFe = $5,6/56 = 0,1$ mol. nFeCl3 = 0,1 mol. mFeCl3 = $0,1 \\times (56 + 35,5 \\times 3) = 16,25$ gam."
  },
  {
    id: 17,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Nước Javel là hỗn hợp các chất nào sau đây?",
    options: ["$NaCl, NaClO_3, H_2O$.", "$NaCl, NaClO, H_2O$.", "$HCl, HClO, H_2O$.", "$KMnO_4, HCl, H_2O$."],
    correctAnswer: 1,
    explanation: "Nước Javel được tạo ra khi sục khí $Cl_2$ vào dung dịch $NaOH$ ở nhiệt độ thường: $Cl_2 + 2NaOH \\rightarrow NaCl + NaClO + H_2O$."
  },
  {
    id: 18,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Dẫn 4,958 lít khí $Cl_2$ (đkc) vào dung dịch $KOH$ dư ở $100^oC$. Khối lượng muối $KClO_3$ thu được với hiệu suất 90% là",
    options: ["8,17 gam.", "7,35 gam.", "6,75 gam.", "24,51 gam."],
    correctAnswer: 1,
    explanation: "$3Cl_2 + 6KOH \\xrightarrow{100^oC} 5KCl + KClO_3 + 3H_2O$. nCl2 = $4,958/24,79 = 0,2$ mol. nKClO3 lý thuyết = $0,2/3$ mol. mKClO3 thực tế = $(0,2/3) \\times 122,5 \\times 0,9 = 7,35$ gam."
  },
  {
    id: 19,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Đặc điểm nào sau đây đúng khi nói về xu hướng biến đổi của các halogen từ F đến I?",
    options: ["Tính oxi hóa tăng dần.", "Bán kính nguyên tử giảm dần.", "Nhiệt độ sôi và nhiệt độ nóng chảy tăng dần.", "Độ âm điện tăng dần."],
    correctAnswer: 2,
    explanation: "Từ F đến I, khối lượng phân tử tăng dần và tương tác van der Waals tăng dần làm nhiệt độ sôi, nhiệt độ nóng chảy tăng dần."
  },
  {
    id: 20,
    section: "PHẦN III. CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Một hồ bơi có thể tích $500 m^3$ cần được khử trùng bằng khí Chlorine với nồng độ $0,5 mg/L$. Khối lượng khí $Cl_2$ cần dùng là",
    options: ["250 gam.", "500 gam.", "25 gam.", "1000 gam."],
    correctAnswer: 0,
    explanation: "$V = 500 m^3 = 500,000$ L. Khối lượng $Cl_2 = 500,000 \\times 0,5 = 250,000$ mg = 250 g."
  },
  {
    id: 21,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Cho phản ứng: $Fe_3O_4 + HNO_3 \\rightarrow Fe(NO_3)_3 + NO + H_2O$. Sau khi cân bằng với hệ số nguyên tối giản, hệ số của $HNO_3$ là",
    options: ["10", "28", "14", "45"],
    correctAnswer: 1,
    explanation: "Cân bằng: $3Fe_3O_4 + 28HNO_3 \\rightarrow 9Fe(NO_3)_3 + NO + 14H_2O$. Hệ số của $HNO_3$ là 28."
  },
  {
    id: 22,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Trong phản ứng oxi hóa – khử, chất oxi hóa là chất",
    options: ["Nhường electron, số oxi hóa tăng.", "Nhường electron, số oxi hóa giảm.", "Nhận electron, số oxi hóa giảm.", "Nhận electron, số oxi hóa tăng."],
    correctAnswer: 2,
    explanation: "Chất oxi hóa là chất nhận electron, dẫn đến số oxi hóa của nó giảm xuống sau phản ứng."
  },
  {
    id: 23,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Số oxi hóa của Manganese (Mn) trong ion $MnO_4^{2-}$ là",
    options: ["+7.", "+6.", "+4.", "+2."],
    correctAnswer: 1,
    explanation: "Trong $MnO_4^{2-}$: $x + 4(-2) = -2 \\Rightarrow x = +6$."
  },
  {
    id: 24,
    section: "PHẦN I. CHỦ ĐỀ: OXI HÓA - KHỬ VÀ NĂNG LƯỢNG HÓA HỌC",
    text: "Phản ứng nào sau đây không phải là phản ứng oxi hóa - khử?",
    options: [
      "$2KClO_3 \\xrightarrow{t^o} 2KCl + 3O_2$.",
      "$CaCO_3 + 2HCl \\rightarrow CaCl_2 + CO_2 + H_2O$.",
      "$Mg + 2HCl \\rightarrow MgCl_2 + H_2$.",
      "$4P + 5O_2 \\xrightarrow{t^o} 2P_2O_5$."
    ],
    correctAnswer: 1,
    explanation: "Phản ứng $CaCO_3 + 2HCl$ là phản ứng trao đổi, không có sự thay đổi số oxi hóa của các nguyên tố."
  },
  {
    id: 25,
    section: "CHỦ ĐỀ: NĂNG LƯỢNG HÓA HỌC",
    text: "Cho phản ứng: $H_2(g) + I_2(g) \\rightleftharpoons 2HI(g)$. Công thức tính biến thiên enthalpy của phản ứng dựa vào năng lượng liên kết ($E_b$) là",
    options: [
      "$\\Delta_rH^o_{298} = E_b(H-H) + E_b(I-I) - 2E_b(H-I)$.",
      "$\\Delta_rH^o_{298} = 2E_b(H-I) - E_b(H-H) - E_b(I-I)$.",
      "$\\Delta_rH^o_{298} = E_b(H-H) + E_b(I-I) + 2E_b(H-I)$.",
      "$\\Delta_rH^o_{298} = E_b(H-H) + E_b(I-I) - E_b(H-I)$."
    ],
    correctAnswer: 0,
    explanation: "$\\Delta_rH^o_{298} = \\sum E_{b(cds)} - \\sum E_{b(sp)} = E_b(H-H) + E_b(I-I) - 2E_b(H-I)$."
  },
  {
    id: 26,
    section: "CHỦ ĐỀ: NĂNG LƯỢNG HÓA HỌC",
    text: "Đồ thị năng lượng của một phản ứng có dạng mức năng lượng của chất tham gia cao hơn mức năng lượng của sản phẩm. Phản ứng này là",
    options: ["Phản ứng thu nhiệt.", "Phản ứng tỏa nhiệt.", "Phản ứng không có sự thay đổi năng lượng.", "Phản ứng phân hủy."],
    correctAnswer: 1,
    explanation: "Khi năng lượng chất tham gia cao hơn sản phẩm, năng lượng dư thừa được giải phóng ra môi trường dưới dạng nhiệt (tỏa nhiệt)."
  },
  {
    id: 27,
    section: "CHỦ ĐỀ: NĂNG LƯỢNG HÓA HỌC",
    text: "Nhiệt tạo thành chuẩn của các đơn chất ở dạng bền nhất bằng",
    options: ["100 kJ/mol.", "1 kJ/mol.", "0 kJ/mol.", "-298 kJ/mol."],
    correctAnswer: 2,
    explanation: "Theo quy ước, nhiệt tạo thành chuẩn của đơn chất ở trạng thái bền nhất ở điều kiện chuẩn bằng 0."
  },
  {
    id: 28,
    section: "CHỦ ĐỀ: NĂNG LƯỢNG HÓA HỌC",
    text: "Biến thiên enthalpy chuẩn của phản ứng nhiệt phân hoàn toàn 1 mol $CaCO_3$ là $+178,49 \\text{ kJ}$. Phát biểu nào sau đây đúng?",
    options: [
      "Để nhiệt phân 1 mol $CaCO_3$ cần cung cấp nhiệt lượng là 178,49 kJ.",
      "Phản ứng giải phóng nhiệt lượng 178,49 kJ ra môi trường.",
      "Đây là phản ứng tỏa nhiệt tự phát.",
      "Sau phản ứng, nhiệt độ môi trường xung quanh sẽ tăng lên."
    ],
    correctAnswer: 0,
    explanation: "$\\Delta_rH^o_{298} > 0$ là phản ứng thu nhiệt, nghĩa là cần cung cấp nhiệt lượng từ môi trường để phản ứng xảy ra."
  },
  {
    id: 29,
    section: "CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Chất xúc tác là chất làm",
    options: [
      "Tăng tốc độ phản ứng và bị tiêu hao sau phản ứng.",
      "Tăng tốc độ phản ứng nhưng không bị biến đổi về chất và lượng sau phản ứng.",
      "Giảm tốc độ phản ứng để kiểm soát quá trình.",
      "Thay đổi nồng độ các chất tham gia phản ứng."
    ],
    correctAnswer: 1,
    explanation: "Chất xúc tác làm giảm năng lượng hoạt hóa, tăng tốc độ phản ứng nhưng được phục hồi nguyên vẹn sau khi phản ứng kết thúc."
  },
  {
    id: 30,
    section: "CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Đối với phản ứng có các chất khí tham gia, khi tăng áp suất, tốc độ phản ứng tăng là do",
    options: [
      "Làm tăng nhiệt độ của hệ phản ứng.",
      "Làm tăng nồng độ các chất khí, dẫn đến tăng tần số va chạm hiệu quả.",
      "Làm giảm năng lượng hoạt hóa của phản ứng.",
      "Làm tăng diện tích tiếp xúc giữa các chất."
    ],
    correctAnswer: 1,
    explanation: "Tăng áp suất chất khí làm các hạt gần nhau hơn (tăng nồng độ), dẫn đến tăng xác suất va chạm có lợi."
  },
  {
    id: 31,
    section: "CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Phản ứng của $H_2$ và $Cl_2$ diễn ra rất chậm trong bóng tối, nhưng khi có chiếu sáng mạnh thì phản ứng xảy ra tức thì và có thể gây nổ. Yếu tố ảnh hưởng ở đây là",
    options: ["Nồng độ.", "Nhiệt độ.", "Ánh sáng.", "Chất xúc tác."],
    correctAnswer: 2,
    explanation: "Ánh sáng cung cấp năng lượng để cắt đứt liên kết $Cl-Cl$, khởi đầu cho phản ứng dây chuyền."
  },
  {
    id: 32,
    section: "CHỦ ĐỀ: TỐC ĐỘ PHẢN ỨNG",
    text: "Cho phản ứng đơn giản: $A + 2B \\rightarrow C$. Nếu nồng độ chất A tăng 2 lần và nồng độ chất B tăng 3 lần thì tốc độ phản ứng tăng lên",
    options: ["6 lần.", "12 lần.", "18 lần.", "36 lần."],
    correctAnswer: 2,
    explanation: "Biểu thức tốc độ: $v = k[A][B]^2$. Tỉ lệ tăng: $2 \\times 3^2 = 18$ lần."
  },
  {
    id: 33,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Đặc điểm nào sau đây không đúng đối với các nguyên tố nhóm Halogen?",
    options: [
      "Có 7 electron ở lớp ngoài cùng.",
      "Có độ âm điện lớn.",
      "Chỉ có số oxi hóa -1 trong các hợp chất.",
      "Tồn tại dạng phân tử $X_2$ ở trạng thái đơn chất."
    ],
    correctAnswer: 2,
    explanation: "Trừ Fluorine chỉ có số oxi hóa -1, các halogen khác còn có các số oxi hóa dương như +1, +3, +5, +7 trong các hợp chất chứa O hoặc F."
  },
  {
    id: 34,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Để nhận biết ion $I^-$ trong dung dịch, ngoài dung dịch $AgNO_3$, người ta có thể dùng",
    options: [
      "Dung dịch hồ tinh bột.",
      "Nước Chlorine và hồ tinh bột.",
      "Quỳ tím.",
      "Nước vôi trong."
    ],
    correctAnswer: 1,
    explanation: "Chlorine đẩy Iodine ra khỏi muối: $Cl_2 + 2I^- \\rightarrow 2Cl^- + I_2$. Iodine tạo màu xanh đặc trưng với hồ tinh bột."
  },
  {
    id: 35,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Trong các hydrohalic acid, acid nào có tính khử mạnh nhất?",
    options: ["$HF$.", "$HCl$.", "$HBr$.", "$HI$."],
    correctAnswer: 3,
    explanation: "Tính khử của các HX tăng dần từ HF đến HI do kích thước nguyên tử tăng và liên kết H-X yếu dần."
  },
  {
    id: 36,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Ứng dụng nào sau đây không phải của Chlorine?",
    options: [
      "Khử trùng nước sinh hoạt.",
      "Sản xuất nhựa PVC.",
      "Sản xuất muối ăn ($NaCl$) bằng cách cho tác dụng trực tiếp với $NaOH$.",
      "Sản xuất chất tẩy rửa, thuốc diệt côn trùng."
    ],
    correctAnswer: 2,
    explanation: "Muối ăn được khai thác trực tiếp từ tự nhiên, không ai sản xuất bằng phản ứng tốn kém giữa $Cl_2$ và $NaOH$."
  },
  {
    id: 37,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Hiện tượng xảy ra khi cho nước Bromine vào dung dịch $NaI$ là",
    options: [
      "Dung dịch xuất hiện kết tủa trắng.",
      "Dung dịch chuyển sang màu vàng đậm hoặc nâu do giải phóng $I_2$.",
      "Không có hiện tượng gì xảy ra.",
      "Có bọt khí không màu thoát ra."
    ],
    correctAnswer: 1,
    explanation: "$Br_2 + 2NaI \\rightarrow 2NaBr + I_2$. Iodine tan trong dung dịch tạo màu nâu đỏ/vàng đậm."
  },
  {
    id: 38,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Cho 0,1 mol khí $Cl_2$ tác dụng hoàn toàn với dung dịch $KI$ dư. Khối lượng Iodine thu được là",
    options: ["12,7 gam.", "25,4 gam.", "50,8 gam.", "16,6 gam."],
    correctAnswer: 1,
    explanation: "$Cl_2 + 2KI \\rightarrow 2KCl + I_2$. nI2 = nCl2 = 0,1 mol. mI2 = $0,1 \\times 254 = 25,4$ g."
  },
  {
    id: 39,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Fluorine phản ứng mãnh liệt với nước ngay ở nhiệt độ thường tạo ra khí",
    options: ["$H_2$.", "$O_2$.", "$O_3$.", "$F_2O$."],
    correctAnswer: 1,
    explanation: "$2F_2 + 2H_2O \\rightarrow 4HF + O_2$. Phản ứng mãnh liệt giải phóng khí Oxygen."
  },
  {
    id: 40,
    section: "CHỦ ĐỀ: NHÓM HALOGEN",
    text: "Để điều chế Chlorine trong phòng thí nghiệm, người ta cho $HCl$ đặc tác dụng với chất oxi hóa mạnh như $KMnO_4$. Nếu dùng 1 mol $KMnO_4$ thì thể tích khí $Cl_2$ (đkc) thu được là",
    options: ["24,79 lít.", "37,185 lít.", "61,975 lít.", "74,37 lít."],
    correctAnswer: 2,
    explanation: "$2KMnO_4 + 16HCl \\rightarrow 2KCl + 2MnCl_2 + 5Cl_2 + 8H_2O$. nCl2 = $5/2 \\times nKMnO_4 = 2,5$ mol. V = $2,5 \\times 24,79 = 61,975$ L."
  }
];
