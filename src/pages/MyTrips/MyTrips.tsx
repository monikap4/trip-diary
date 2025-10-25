const Trips = () => {
  const trips = [
    { id: 1, name: 'Vysoké Tatry', distance: '45 km' },
    { id: 2, name: 'Krkonoše', distance: '32 km' },
  ];

  return (
    <div className="mainContainer">
      <h2>Moje trasy</h2>
      {trips.length > 0 ? (
        <ul>
          {trips.map((trip) => (
            <li key={trip.id}>
              <strong>{trip.name}</strong> — {trip.distance}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nemáš zatím žádné uložené trasy.</p>
      )}
      <h3>Test sticky footer</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        facilisis tortor justo, ut tincidunt nunc condimentum vitae. Morbi
        euismod risus at augue ultricies, sit amet pretium sapien vestibulum.
        Aenean vehicula quam in justo cursus ultrices. Sed placerat nunc
        vulputate libero finibus ultricies. Aenean cursus tristique est. Aliquam
        vitae ligula a mi sagittis pretium ut vel sapien. Nam et velit
        pellentesque, tincidunt erat at, pellentesque neque. Morbi imperdiet ut
        nisi quis consectetur. Maecenas vel ultrices odio. Integer venenatis
        interdum odio, a scelerisque mi commodo eu. Aenean nec euismod dui.
        Phasellus hendrerit erat vitae nibh consequat, eu ornare ante fringilla.
        In ut semper mauris. Aliquam lobortis iaculis mi. Ut ut ipsum quis mi
        facilisis dapibus ac iaculis quam. Fusce eu risus rutrum, vestibulum
        dolor imperdiet, finibus eros. Vestibulum suscipit lacinia rutrum.
        Aenean a felis quis quam blandit vehicula eget a ligula. Nam est augue,
        ultrices sit amet dignissim mollis, aliquam eget quam. Etiam tellus leo,
        blandit a elementum in, blandit et purus. Quisque eu risus mi. Donec a
        eros consectetur turpis sodales ultrices. Suspendisse diam tellus,
        egestas non ipsum et, venenatis mollis mi. Nunc porttitor vulputate
        augue. Phasellus ultrices eros id dolor aliquet congue. Aenean
        vestibulum pellentesque nibh, non scelerisque tellus viverra eu. Aliquam
        ut felis ante. Phasellus non nibh at nisl gravida laoreet. Phasellus
        vehicula ante quis purus semper, eu condimentum turpis rutrum. Sed nec
        justo sit amet erat accumsan interdum eget vel leo. Morbi orci quam,
        ullamcorper et volutpat eget, pulvinar id erat. Aliquam dapibus mi a
        lectus vestibulum, sed venenatis metus fermentum. Quisque nunc orci,
        consequat nec erat eu, pharetra convallis lectus. Etiam in enim non
        nulla accumsan vestibulum vel vel mauris. Sed id arcu pulvinar,
        fringilla ex at, pellentesque elit. Nulla posuere dapibus urna, non
        gravida sapien. Cras molestie enim risus. Curabitur vitae turpis
        porttitor, cursus tellus vel, lacinia nisi. Praesent porta metus ac
        rutrum congue. Suspendisse sed maximus nunc. Pellentesque et elit elit.
        Proin tortor elit, congue ac erat ut, fringilla pretium turpis. Aliquam
        elementum pulvinar massa sed dignissim. Duis tempus eros lectus, et
        dignissim arcu semper ut. Morbi vitae euismod turpis, sit amet aliquam
        nisl. Nulla facilisi. Proin vulputate lacus nulla, sed semper augue
        luctus sit amet. Pellentesque placerat augue a ultricies lacinia. Proin
        a maximus elit. Cras at velit aliquet massa sodales lobortis. Proin sit
        amet eros eu lacus consequat convallis. Nam massa nibh, semper vel metus
        quis, semper feugiat ante. Suspendisse consectetur, enim ac pharetra
        gravida, urna velit blandit leo, at euismod enim nulla ut risus. Sed
        porta magna in turpis sodales pellentesque. Integer maximus odio quis
        dictum tempor. In vulputate felis nisl, a porttitor sapien aliquam ut.
        Sed dapibus mollis mollis. In porta ac urna sed mattis. Duis eu nunc
        dui. Pellentesque pellentesque molestie magna at vestibulum. In congue
        odio leo, at pulvinar mauris vulputate ac. Phasellus at efficitur
        ligula. Donec blandit ligula sed nisi egestas eleifend at in purus.
        Fusce dictum pellentesque risus. Vivamus nunc massa, rhoncus dictum
        nulla id, bibendum malesuada ipsum. Aenean placerat, neque a tempus
        auctor, nibh erat euismod nisl, at aliquam nibh sapien id lacus. Nullam
        posuere nunc nisi, at dictum erat dapibus sit amet. Mauris fringilla
        imperdiet vestibulum. Suspendisse lectus quam, volutpat eget faucibus
        sed, porttitor non magna. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Aliquam sed nulla vel
        eros hendrerit ultricies id vel dolor. Nulla mollis pellentesque mattis.
        Pellentesque egestas nec ex quis elementum. Cras vehicula lectus quis mi
        aliquet vehicula. Duis maximus nunc ac nunc dictum, rhoncus consequat
        urna faucibus. Vestibulum consectetur elit ut mauris lobortis ultricies.
        Phasellus scelerisque pharetra bibendum. Proin ultricies ultricies
        ligula vitae malesuada. Curabitur ultrices justo ipsum, et fringilla mi
        bibendum malesuada. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Sed efficitur blandit ante, a
        sollicitudin eros vulputate ac. Aliquam dignissim eleifend libero, vitae
        congue eros finibus nec. Praesent sapien sem, sollicitudin id mattis eu,
        venenatis eget magna. Vivamus consequat viverra mauris non condimentum.
        Sed maximus elementum magna, sit amet hendrerit nulla gravida eu.
      </p>
    </div>
  );
};

export default Trips;
