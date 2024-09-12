import Service from '../components/service';

function Services() {
    return (
        <div className="services">
            <h2>Services</h2>
            <div className="service-items">
                <Service title="Développement web" icon="💻" />
                <Service title="Design web" icon="🎨" />
                <Service title="SEO" icon="📈" />
                <Service title="Marketing" icon="🚀" />
            </div>
        </div>
    );
}

export default Services;