import { useState } from "react";

export default function Checkbox() {
  const fakeData = [
    { id: 1, label: "خرید" },
    { id: 2, label: "فروش" },
    { id: 3, label: "اجاره" },
    { id: 4, label: "رهن" },
  ];

  const [data, setData] = useState([]);
  console.log(data);

  const handleCheckboxChange = (value) => {
    if (data.includes(value)) {
      setData(data.filter((item) => item !== value));
    } else {
      setData([...data, value]);
    }
  };

  var myArray = ["aaa", "bbb", "ccc"];
  var baseUrl = "/myLink";
  var paramName = "array=";

  var arrayAsString = "?" + paramName + myArray.join("&" + paramName);
  var urlWithParams = baseUrl + arrayAsString;

  console.log(urlWithParams);

  return (
    <div style={{ padding: "20px" }}>
      {fakeData.map((d) => (
        <div
          key={d.id}
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <div>
            <label htmlFor={d.label}>{d.label}</label>
            <input
              type="checkbox"
              id={d.label}
              name="developer"
              onChange={() => handleCheckboxChange(d.label)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
