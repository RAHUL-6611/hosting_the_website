import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import "./cse.css";
import civil  from "../../images/civil.jpg"

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
      <div className="gallery_dept">

    <ImageList
      sx={{
        width: 500,
        height: 500,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
    }}
    rowHeight={200}
    gap={1}
    >
      {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
          
        return (
          <ImageListItem>
          <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              />
            <ImageListItemBar
              sx={{
                  background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position="top"
                actionIcon={
                    <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                    >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              />
          </ImageListItem>
        );
    })}
    </ImageList>
    </div>
  );
}

const itemData = [
  
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Burger',
      // author: '@rollelflex_graphy726',
    },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Burger',
      // author: '@rollelflex_graphy726',
    },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Camera',
    // author: '@helloimnik',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Coffee',
    // author: '@nolanissac',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Hats',
    // author: '@hjrc33',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Honey',
    // author: '@arwinneil',
    featured: true,
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Basketball',
    // author: '@tjdragotta',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Fern',
    // author: '@katie_wasserman',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Mushrooms',
    // author: '@silverdalex',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Tomato basil',
    // author: '@shelleypauls',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Sea star',
    // author: '@peterlaster',
  },
  {
    img:"https://cse.pec.edu/pages/cse.jpg",
    // title: 'Bike',
    // author: '@southside_customs',
  },
];
