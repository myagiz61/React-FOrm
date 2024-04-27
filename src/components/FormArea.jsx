import { useState } from "react";
import Select from "react-select";

const FormArea = () => {
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedth, setCheckedth] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkeds, setCheckeds] = useState(false);
  const [checkedf, setCheckedf] = useState(false);
  const [checkeda, setCheckeda] = useState(false);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionf, setSelectedOptionf] = useState(null);
  const [selectedOptionth, setSelectedOptionth] = useState(null);
  const [selectedOptionts, setSelectedOptionts] = useState(null);
  const [selectedOptionta, setSelectedOptionta] = useState(null);

  const options = [
    { value: "A", label: "A" },
    { value: "A1", label: "A1" },
    { value: "B", label: "B" },
    { value: "B1", label: "B1" },
    { value: "C", label: "C" },
    { value: "C1", label: "C1" },
    { value: "C1", label: "D" },
  ];
  const options2 = [
    { value: "SRC1", label: "SRC1" },
    { value: "SRC2", label: "SRC2" },
    { value: "SRC3", label: "SRC4" },
    { value: "SRC5(ADR)", label: "SRC5(ADR)" },
  ];

  const diseaseDepartments = [
    { value: "kardiyoloji", label: "Kardiyoloji" },
    { value: "dermatoloji", label: "Dermatoloji" },
    { value: "nöroloji", label: "Nöroloji" },
    { value: "ortopedi", label: "Ortopedi" },
    { value: "pediatri", label: "Pediatri" },
    { value: "psikiyatri", label: "Psikiyatri" },
    { value: "üroloji", label: "Üroloji" },
    { value: "göz hastalıkları", label: "Göz Hastalıkları" },
    { value: "kulak burun boğaz", label: "Kulak Burun Boğaz" },
    { value: "diş hekimliği", label: "Diş Hekimliği" },
    { value: "genel cerrahi", label: "Genel Cerrahi" },
    { value: "endokrinoloji", label: "Endokrinoloji" },
    { value: "onkoloji", label: "Onkoloji" },
    { value: "romatoloji", label: "Romatoloji" },
    { value: "nükleer tıp", label: "Nükleer Tıp" },
    { value: "gastroenteroloji", label: "Gastroenteroloji" },
    { value: "nefroloji", label: "Nefroloji" },
    { value: "radyoloji", label: "Radyoloji" },
    { value: "acil tıp", label: "Acil Tıp" },
    { value: "jinekoloji", label: "Jinekoloji" },
    {
      value: "kardiyovasküler cerrahi",
      label: "Kardiyovasküler Cerrahi",
    },
  ];

  const optionsfour = [...Array(100).keys()].map((number) => ({
    value: (number + 1).toString(),
    label: `${number + 1} %`,
  }));

  const handleHosBox = (option) => {
    setCheckedth(option === "showInput");
    setSelectedOptionth(option);
  };

  const handleCheckBOx = (option) => {
    setChecked(option === "showInput");
    setSelectedOption(option);
  };
  const handleOkBox = (option) => {
    setCheckedTwo(option === "showInput");
    setSelectedOptionTwo(option);
  };

  const changeBox = (option) => {
    setCheckedf(option === "showInput");
    setSelectedOptionf(option);
  };

  const changeMaleBox = (option) => {
    setCheckeds(option === "showInput");
    setSelectedOptionts(option);
  };

  const changeFemaBox = (option) => {
    setCheckeda(option === "showInput");
    setSelectedOptionta(option);
  };

  return (
    <form className="form-control Formcontainer ">
      <div>
        <div>
          <h1 className="mb-3">Kişisel Bilgiler</h1>
          <hr />
        </div>

        <div className="d-flex justify-content-center">
          <img
            src="images.png"
            className="img-fluid mb-5"
            style={{ borderRadius: "50%", width: "120px" }}
          />
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              position: "absolute",
              marginTop: "70px",
              marginLeft: "110px",
            }}
          >
            <i className="bi bi-trash" />
          </button>
        </div>
        <div className=" nameArea d-flex justify-content-between mx-4">
          <div className="form-group nameAreaCont">
            <label htmlFor="exampleInputEmail1">
              Adınız <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control nameInput"
              style={{ width: "500px" }}
            />
          </div>
          <div
            className="form-group"
            style={{ marginLeft: "20px", width: "500px" }}
          >
            <label htmlFor="exampleInputPassword1">
              Soyadınız<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </div>
        <div className="d-flex justify-content-between  mx-4 mt-3">
          <div className="form-group validationNumber">
            <label htmlFor="exampleInputPassword1 valida">
              T.C. Kimlik Numarası
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Zorunlu Değil"
              style={{ width: "500px" }}
            />
          </div>

          <div className="d-flex flex-column">
            <div>
              <label htmlFor="" className="mt-2">
                Cinsiyetin <span className="text-danger">*</span>
              </label>
            </div>
            <div className="d-flex" style={{ marginRight: "190px" }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault1n"
                  id="flexRadioDefault1n"
                  checked={selectedOptionts === "showInput"}
                  onChange={() => changeMaleBox("showInput")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault1n"
                >
                  Erkek
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault2n"
                  id="flexRadioDefault2n"
                  checked={selectedOptionts === "false"}
                  onChange={() => changeMaleBox("false")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault2n"
                >
                  Kadın
                </label>
              </div>
              <div className="form-check mx-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault3n"
                  id="flexRadioDefault3n"
                  checked={selectedOptionts === "none"}
                  onChange={() => changeMaleBox("none")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault3n"
                >
                  Belirtilmemiş
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className=" sigaraArea d-flex justify-content-between">
          <div className="d-flex flex-column mx-4 mt-4">
            <div>
              <label htmlFor="">Medeni Hal</label>
            </div>
            <div className="d-flex ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault4n"
                  id="flexRadioDefault4n"
                  onChange={() => changeFemaBox("showInput")}
                  checked={selectedOptionta === "showInput"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault4n"
                >
                  Evli
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault5n"
                  id="flexRadioDefault5n"
                  onChange={() => changeFemaBox("false")}
                  checked={selectedOptionta === "false"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault5n"
                >
                  Bekar
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault6n"
                  id="flexRadioDefault6n"
                  onChange={() => changeFemaBox("none")}
                  checked={selectedOptionta === "none"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefaul6n"
                >
                  Belirtilmemiş
                </label>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column mx-4 mt-4">
            <div
              className="sigaraInfo"
              style={{ marginRight: "300px" }}
            >
              <label htmlFor="">Sigara Kullanıyormusun?</label>
            </div>
            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault7n"
                  id="flexRadioDefault7n"
                  onChange={() => changeBox("showInput")}
                  checked={selectedOptionf === "showInput"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault7n"
                >
                  Evet
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault8n"
                  id="flexRadioDefault8n"
                  onChange={() => changeBox("false")}
                  checked={selectedOptionf === "false"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault8n"
                >
                  Hayır
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-2 p-2 m-3 mt-3 ">
          <div className=" d-flex justify-content-between mb-3 mx-3">
            <label htmlFor="">
              Doğum Tarihi<span className="text-danger"> *</span>
            </label>
            <div>
              <label htmlFor="" style={{ marginRight: "180px" }}>
                Uyruk<span className="text-danger"> *</span>
              </label>
            </div>
          </div>
          <div className="d-flex">
            <select
              className="form-select BirtOp mx-3"
              aria-label="Select group example"
            >
              <label htmlFor="">Doğum Tarihi</label>
              <optgroup label="Gün">
                <option value="1" selected className="">
                  01
                </option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="3">04</option>
                <option value="3">05</option>
                <option value="3">06</option>
                <option value="3">07</option>
                <option value="3">08</option>
                <option value="3">09</option>
                <option value="3">10</option>
                <option value="1">11</option>
                <option value="2">12</option>
                <option value="3">13</option>
                <option value="3">14</option>
                <option value="3">15</option>
                <option value="3">16</option>
                <option value="3">17</option>
                <option value="3">18</option>
                <option value="3">19</option>
                <option value="3">20</option>
                <option value="3">21</option>
                <option value="1">22</option>
                <option value="2">23</option>
                <option value="3">24</option>
                <option value="3">25</option>
                <option value="3">26</option>
                <option value="3">27</option>
                <option value="3">28</option>
                <option value="3">29</option>
                <option value="3">30</option>
                <option value="3">31</option>
              </optgroup>
            </select>
            <select
              className="form-select BirtOp mx-3"
              aria-label="Select group example"
            >
              <optgroup label="Ay">
                <option value="1">Ocak</option>
                <option value="2">şubat</option>
                <option value="3">Mart</option>
                <option value="3">Nisan</option>
                <option value="3">Mayıs</option>
                <option value="3">Haziran</option>
                <option value="3">Temmuz</option>
                <option value="3">Ağustos</option>
                <option value="3">Eylül</option>
                <option value="3">Ekim</option>
                <option value="1">Kasım</option>
                <option value="2">Aralık</option>
              </optgroup>
            </select>
            <select
              className="form-select BirtOp mx-3"
              aria-label="Select group example"
            >
              <optgroup label="Yıl">
                <>
                  <option value="1954">1954</option>
                  <option value="1955">1955</option>
                  <option value="1956">1956</option>
                  <option value="1957">1957</option>
                  <option value="1958">1958</option>
                  <option value="1959">1959</option>
                  <option value="1960">1960</option>
                  <option value="1961">1961</option>
                  <option value="1962">1962</option>
                  <option value="1963">1963</option>
                  <option value="1964">1964</option>
                  <option value="1965">1965</option>
                  <option value="1966">1966</option>
                  <option value="1967">1967</option>
                  <option value="1968">1968</option>
                  <option value="1969">1969</option>
                  <option value="1970">1970</option>
                  <option value="1971">1971</option>
                  <option value="1972">1972</option>
                  <option value="1973">1973</option>
                  <option value="1974">1974</option>
                  <option value="1975">1975</option>
                  <option value="1976">1976</option>
                  <option value="1977">1977</option>
                  <option value="1978">1978</option>
                  <option value="1979">1979</option>
                  <option value="1980">1980</option>
                  <option value="1981">1981</option>
                  <option value="1982">1982</option>
                  <option value="1983">1983</option>
                  <option value="1984">1984</option>
                  <option value="1985">1985</option>
                  <option value="1986">1986</option>
                  <option value="1987">1987</option>
                  <option value="1988">1988</option>
                  <option value="1989">1989</option>
                  <option value="1990">1990</option>
                  <option value="1991">1991</option>
                  <option value="1992">1992</option>
                  <option value="1993">1993</option>
                  <option value="1994">1994</option>
                  <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                </>
              </optgroup>
            </select>

            <select
              className="form-select BirtOp "
              aria-label="Select group example"
            >
              <optgroup label="Ülke">
                <>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">
                    Czech Republic
                  </option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">
                    Dominican Republic
                  </option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">
                    Equatorial Guinea
                  </option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea">Korea</option>
                  <option value="Kosovo">Kosovo</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Türkiye">Türkiye</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                </>
              </optgroup>
            </select>
          </div>
        </div>

        <div className="askeriDurum d-flex mx-4 mt-4 justify-content-between">
          <div className="d-flex flex-column">
            <div>
              <label htmlFor="">
                Askerlik Durumu{" "}
                <span className="text-danger"> *</span>
              </label>
            </div>
            <div className="d-flex">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault9n"
                  id="flexRadioDefault9n"
                  checked={selectedOption === "none"}
                  onChange={() => handleCheckBOx("none")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault9n"
                >
                  Yaptı
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault10n"
                  id="flexRadioDefault10n"
                  checked={selectedOption === "showInput"}
                  onClick={() => handleCheckBOx("showInput")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault10n"
                >
                  Tecilli
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault11n"
                  id="flexRadioDefault11n"
                  checked={selectedOption === "undefined"}
                  onChange={() => handleCheckBOx("undefined")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault11n"
                >
                  Muaf
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault12n"
                  id="flexRadioDefault12n"
                  checked={selectedOption === "null"}
                  onChange={() => handleCheckBOx("null")}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault12n"
                >
                  Belirtilmemiş
                </label>
              </div>
            </div>
          </div>
          <div>
            <div>
              {checked && (
                <div className="tescilInfo">
                  <label htmlFor="" className="mb-2">
                    Tescil/Tamamlama Tarihi{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex">
                    <select
                      className="form-select"
                      aria-label="multiple select example"
                      style={{ width: "200px" }}
                    >
                      <option value="1">Ocak</option>
                      <option value="2">şubat</option>
                      <option value="3">Mart</option>
                      <option value="3">Nisan</option>
                      <option value="3">Mayıs</option>
                      <option value="3">Haziran</option>
                      <option value="3">Temmuz</option>
                      <option value="3">Ağustos</option>
                      <option value="3">Eylül</option>
                      <option value="3">Ekim</option>
                      <option value="1">Kasım</option>
                      <option value="2">Aralık</option>
                    </select>

                    <select
                      className="form-select  mx-3"
                      aria-label="multiple select example"
                      style={{ width: "200px" }}
                    >
                      <optgroup label="Yıl">
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                        <option value="2036">2036</option>
                        <option value="2037">2037</option>
                        <option value="2038">2038</option>
                        <option value="2039">2039</option>
                        <option value="2040">2040</option>
                        <option value="2041">2041</option>
                        <option value="2042">2042</option>
                        <option value="2043">2043</option>
                        <option value="2044">2044</option>
                        <option value="2045">2045</option>
                        <option value="2046">2046</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" drivingArea d-flex justify-content-between mt-4 mx-4">
          <div>
            <label htmlFor="">Ehliyet Var Mı?</label>
            <div className="d-flex ">
              <div className="form-check">
                <input
                  className="form-check-input "
                  type="radio"
                  name="flexRadioDefault13n"
                  id="flexRadioDefault16"
                  onChange={() => handleOkBox("showInput")}
                  checked={selectedOptionTwo === "showInput"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault16"
                >
                  Var
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault14n"
                  id="flexRadioDefault17"
                  onChange={() => handleOkBox("none")}
                  checked={selectedOptionTwo === "none"}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexRadioDefault17"
                >
                  Yok
                </label>
              </div>
            </div>
          </div>

          <div>
            {checkedTwo && (
              <div>
                <div>
                  <label htmlFor="" className="classDetay">
                    Ehliyet Sınıfınız
                    <span className="text-danger"> *</span>
                  </label>
                </div>
                <div className="d-flex ">
                  <div style={{ width: "230px" }}>
                    <Select
                      options={options}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                  <div
                    style={{
                      width: "230px ",
                      marginLeft: "10px",
                      marginTop: "-25px",
                    }}
                  >
                    <div>
                      <label htmlFor="">Varsa SRC Belgeniz</label>
                    </div>
                    <Select
                      options={options2}
                      isMulti
                      className="basic-multi-select"
                      classNamePrefix="select"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="  mt-4 mx-4">
            <div className=" engelArea d-flex justify-content-between">
              <div>
                <label htmlFor="">Bedensel Engeliniz Varmı?</label>
                <div className="d-flex ">
                  <div className="form-check">
                    <input
                      className="form-check-input "
                      type="radio"
                      name="flexRadioDefault15n"
                      id="flexRadioDefault18"
                      checked={selectedOptionth === "showInput"}
                      onChange={() => handleHosBox("showInput")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault18"
                    >
                      Var
                    </label>
                  </div>
                  <div className="form-check mx-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault16n"
                      id="flexRadioDefault19"
                      onChange={() => handleHosBox("none")}
                      checked={selectedOptionth === "none"}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault19"
                    >
                      Yok
                    </label>
                  </div>
                </div>
              </div>

              <div>
                {checkedth && (
                  <>
                    <div>
                      <div className="d-flex">
                        <div className="" style={{ width: "230px" }}>
                          <div>
                            <label htmlFor="">
                              Engel Kategorisi{" "}
                              <span className="text-danger">*</span>
                            </label>
                          </div>
                          <Select options={diseaseDepartments} />
                        </div>
                        <div
                          style={{
                            width: "230px",
                            marginLeft: "10px",
                          }}
                        >
                          <div>
                            <label htmlFor="">
                              Engel Yüzdesi{" "}
                              <span className="text-danger">*</span>
                            </label>
                          </div>
                          <Select options={optionsfour} />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {checkedth && (
          <div>
            <div>
              <label htmlFor="" className="detayinfo">
                Engelinizin Detayı{" "}
                <span className="font-weight-bold text-danger">
                  *
                </span>
              </label>
              <textarea
                className="form-control"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
        )}
        <div
          className="saveBtn"
          style={{ position: "relative", marginLeft: "900px" }}
        >
          <button
            className="  btn text-light mt-4 mb-3"
            style={{ background: "#2253af" }}
          >
            Kaydet ve Devam Et
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormArea;
