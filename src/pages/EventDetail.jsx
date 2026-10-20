import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import SectionCarousel from "../components/SectionCarousel";

export default function EventDetail() {
  const { id } = useParams();

  return (
    <SectionCarousel label={`Detail event`}>
      <Card title={`Detail Event`}>
        <p>
          Waktu Pelaksanaan Kegiatan adalah 17 November 2026 yang berlokasi di
          Gunung Rinjani
        </p>
        <p>
          <Link to="/proyek-event" className="card__link">
            Kembali ke Event/Proyek
          </Link>
        </p>
      </Card>
    </SectionCarousel>
  );
}
