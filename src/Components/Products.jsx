import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import EnquiryModal from './EnquiryModal';


const products = [
  {
    id: 1,
    title: "X-Yachts - X-Yacht 73",
    year: 2002,
    price: "800 EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/a96e42ae-71ca-496f-a0f8-ae7f60fed2db/93593a7c-33dc-47ea-802d-18b2b4a35dc9.512.jpg"
  },
  {
    id: 2,
    title: "Werft-Lührs - Lührsen Kutteryacht 21,50 M",
    year: 1968,
    price: "159.000 EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/b110cae0-c637-4020-8d20-8a2d8ce2fc40/04fc09de-0107-444c-ab39-95b087817d79.512.jpg"
  },
  {
    id: 3,
    title: "Distancia Innovative Yachts Gmbh - Distancia 60 Lifting",
    year: 2002,
    price: "395.000 EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/a091f8db-5ba3-4f2b-9bad-49742a449e2e/aeaa40bd-7cd7-4ed6-ad16-cdb5967f70b1.512.jpg"
  },
  {
    id: 4,
    title: "Guy Couach - 185 ",
    year: 2000,
    price: "295.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/26eeb6cc-0b5a-472c-bcae-a07dc88e2214/ec5d7d3f-cc0e-4f58-a543-2475f859ae0f.512.jpg"
  },
  {
    id: 5,
    title: "Azimut - 62s ",
    year: 2009,
    price: "640.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/27ae7195-380c-46f4-ac1a-29dfbf7d9e5f/0a2cd887-9665-4c77-b45d-27a3b9225dfb.512.jpg"
  },
  {
    id: 6,
    title: "Canados 58' ",
    year: 1988,
    price: "160.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/25943206-0212-4052-8881-14ab26106656/86a6a59b-c94e-4ad2-a204-9ce6d83db3bb.512.jpg"
  },
  {
    id: 7,
    title: "Hatteras - 58 Fisherman ",
    year: 1976,
    price: "114.500  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/a5cdabcb-8a65-4552-9fe3-3320f51d4e3e/c06c83f5-c835-4e9b-8291-d0847d595c05.512.jpg"
  },
  {
    id: 8,
    title: "Nautor Swan - Swan 57 Center Cockpit ",
    year: 1994,
    price: "480.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/6131fe95-550e-449b-b2f9-df3285938186/fb5a5f81-d9b3-47ec-bf5d-14a12d744576.512.jpg"
  },
  {
    id: 9,
    title: "Rodman - Muse 54 ",
    year: 2011,
    price: "480.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/bf40a825-9a2f-41b2-8c95-01e33b440bc5/6f1ee948-e136-4e42-b588-d2df69b64ed4.512.jpg"
  },
  {
    id: 10,
    title: "Ferretti Yachts - Ferretti 53 ",
    year: 1998,
    price: "220.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/e2356b6a-26a6-4711-ae90-84d3d33717e2/0c3c4b36-ce8e-4af9-a0e4-d5b12676841c.512.jpg"
  },
  {
    id: 11,
    title: "Ferretti Yachts - Ferretti Altura 53 Decksalon ",
    year: 1984,
    price: "95.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/9329f7a0-c6c9-43e1-924e-bd32b9c72e29/c951716c-1d47-4924-8d09-23ef11fdf62c.512.jpg"
  },
  {
    id: 12,
    title: "Beneteau - Oceanis 51.1 ",
    year: 2018,
    price: "ND ",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/b405d2ca-fb50-4dcb-9d5a-86524ab73b2c/b45cd6e0-92aa-4175-8f8d-2ff84cf8bd85.512.jpg"
  },
  {
    id: 13,
    title: "Lagoon - 52 F ",
    year: 2019,
    price: "895.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/5f47f27d-b260-4734-867f-f3220f12347d/e08a731f-a2f6-4493-9577-05101f9e3024.512.jpg"
  },
  {
    id: 14,
    title: "Cherubini Boat Company - Cherubini 44 Ketch ",
    year: 1983,
    price: "140.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/6ddcbbc6-5a9d-4ca2-8ac9-5b26557e4ead/04c00df7-d856-40ff-9230-5aa3027d4492.512.jpg"
  },
  {
    id: 15,
    title: "Custom - Van De Stadt 51 ",
    year: 1992,
    price: "199.000  EUR",
    image: "https://dgbstore.blob.core.windows.net/images/0/310/428334ac-07eb-420d-be68-73d5c0cf087a/1c560f8c-f6c6-4fc3-ac5e-ac5fefd98ad6.512.jpg"
  },
];

const Products = () => {
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ title: "", price: "" });

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <Card key={product.id} style={{ width: '18rem', margin: '0.5rem' }}>
            <Card.Img style={{ height: "180px" }} variant="top" src={product.image} />
            <Card.Body className="d-flex flex-column justify-content-between align-items-center">
              <div>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.year} &nbsp; || &nbsp; {product.price}
                </Card.Text>
              </div>
              <Button variant="success" className='mt-3' onClick={() => handleShow(product)}>Jetzt anfragen</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <EnquiryModal show={show} handleClose={handleClose} selectedProduct={selectedProduct} />
    </>
  );
};

export default Products;
