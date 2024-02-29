import RequisitesTable from './RequisitesTable';
import downloadIcon from '../../assets/images/download.svg';

const RequisitesSection = () => {
  return (
    <section className="requisites">
      <div className="requisites__wrapper">
        <div className="requisites__box">
          <h2 className="section-title">Реквизиты</h2>
          <p className="requisites__text">
            Металл-Маркет — компания, которая dolor sit amet consectetur. Ac sem
            nisi nullam mi odio. Justo eu egestas arcu rhoncus et. Eleifend
            morbi sit proin sed proin. Mattis purus sit malesuada in praesent ac
            nisi convallis. Lorem ipsum dolor sit amet.
          </p>
          <RequisitesTable />
        </div>
        <div className="requisites__download">
          <button className="requisites__download-btn">
            <img src={downloadIcon} alt="Download Icon" />
          </button>
          <div className="requisites__download-box">
            <h6 className="requisites__download-title">Скачать реквизиты</h6>
            <p className="requisites__download-text">Скачать pdf файл</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequisitesSection;
