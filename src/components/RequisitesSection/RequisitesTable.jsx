import { useState } from 'react';
import copyIcon from '../../assets/images/copy.svg';

const requisitesData = [
  {
    label: 'Полное наименование',
    value: 'Металл-Маркет',
  },
  {
    label: 'Юридический адрес',
    value: '123456, Россия, Москва, ул. Ленина, 145a, 801',
  },
  {
    label: 'ИНН',
    value: '1234567890',
  },
  {
    label: 'КПП',
    value: '123456789',
  },
  {
    label: 'ОГРН',
    value: '1234567890987',
  },
  {
    label: 'Расчетный счет',
    value: '12345678909876543210',
  },
  {
    label: 'Корреспондентский счет',
    value: '12345678909876543210',
  },
  {
    label: 'БИК',
    value: '123456789',
  },
  {
    label: 'Банк',
    value: 'ПАО «Сбербанк»',
  },
  {
    label: 'Директор',
    value: 'Лебедев Кирилл Александрович',
  },
];

const RequisitesTable = () => {
  const [hoveredRow, setHoveredRow] = useState(-1);

  const handleMouseEnter = (index) => setHoveredRow(index);
  const handleMouseLeave = () => setHoveredRow(-1);

  return (
    <table className="requisites__table">
      <tbody>
        {requisitesData.map((item, index) => (
          <tr
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={hoveredRow === index ? 'requisites__table-hovered' : ''}>
            <td>{item.label}</td>
            <td className="requisites__table-right">
              {item.value}
              {hoveredRow === index && (
                <img className="requisites__table-copy" src={copyIcon} alt="" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RequisitesTable;
