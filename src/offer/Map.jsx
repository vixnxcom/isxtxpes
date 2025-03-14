const Map = () => {
    return (
      <div className="w-[90vw] h-[300px] overflow-hidden mx-auto">
        <iframe
          className="w-full h-full border-0 mx-auto"
          src="https://www.google.com/maps/embed/v1/place?q=bahamas+plaza+beside+ajuji+hotel+gudu+abuja+nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };
  
  export default Map;
  