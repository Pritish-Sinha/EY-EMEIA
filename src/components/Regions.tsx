import * as React from 'react';

interface Section {
    header: string;
    imageUrl: string;
    paragraph_1: string;
    paragraph_2: string;
    buttonText: string;
    buttonHref: string;
}

const sections: Section[] = [
    {
        header: "EMEIA FSO",
        imageUrl: "https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/USA,%20New%20York,%20New%20York%20City,%20Five%20young%20women%20standing%20by%20white%20wall%20with%20makeshift%20charts,%20talking%20-%20Original%201.png?csf=1&web=1&e=aiSH2G",
        paragraph_1: "Innovation",
        paragraph_2: "Designed to help apply innovation to our offerings, supporting EY to future-proof, stay relevant and be competitive.",
        buttonText: "Click Here to Explore",
        buttonHref: "#"
    },
    {
        header: "Europe West",
        imageUrl: "https://sites.ey.com/:i:/r/sites/EMEIA_Innovation_site/Images1/Couple%20Looking%20at%20Large%20Scale%20Projected%20Image%20of%20Space%20-%20Original%201.png?csf=1&web=1&e=tmeR0c",
        paragraph_1: "Innovation Team",
        paragraph_2: "Multidisciplinary and multicultural team which breathes innovation and works across all geographies, Service Lines and sectors to develop new technologies, strategies and solutions that can better position EY and our clients for the future.",
        buttonText: "Click here to Explore",
        buttonHref: "#"
    }
];

const Regions: React.FC = () => {
    return (
        <div className="regions">
            <div className="regions-header-container">
                <h1>Regions</h1>
                <div className="regions-line"></div>
            </div>
            {sections.map((section, index) => (
                <div key={index} className={`region-section ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                    <div className="regions-image-container">
                        <img src={section.imageUrl} alt={section.header} />
                    </div>
                    <div className="regions-text-container">
                        <div className="regions-header-and-line">
                            <h2>{section.header}</h2>
                            <p className="regions-paragraph-1">{section.paragraph_1}</p>
                        </div>
                        <p className="regions-paragraph-2">{section.paragraph_2}</p>
                        <a href={section.buttonHref} className="regions-button">{section.buttonText}</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Regions;
