// src/App.tsx
import { useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, AppBar, Toolbar } from '@mui/material';
import Product from '../../types';
import productsFromJson from "../../local-json/stackline_frontend_assessment_data_2021.json";
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setProducts, getProducts } from './productSlice';
import SalesDataGrid from '../sales-data-grid/SalesDataGrid';
import SalesGraph from '../sales-graph/SalesGraph';
import logo from '../../logo.svg';

// import SalesGraph from './sales-graph/SalesGraph';

export function ProductPage() {
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProducts(productsFromJson));
  }, [dispatch]);

  return (
    <div>
    {/* Header with Logo */}
    <AppBar position="static" style={{ marginBottom: '50px', backgroundColor: '#132d4d' }}>
      <Toolbar>
        <img src={logo} alt="Stackline" style={{ marginRight: '10px' , height: '40px' }} />
      </Toolbar>
    </AppBar>

    {products.map((product: Product) => (
      <Grid container spacing={2} columns={16}>
        {/* Product Card */}
        <Grid item xs={4} md={4}>
          <Card>
            <CardMedia component="img" height="400" width="100%" image={product.image}
              alt={product.title} sx={{ objectFit: "contain" }}/>
            <CardContent>
              <Typography variant="h5">{product.title}</Typography>
              <Typography variant="body2">{product.subtitle}</Typography>
              <div>
                {product.tags.map((tag) => (
                  <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '5px', margin: '2px', borderRadius: '4px' }}>
                   <Typography key={tag} variant="body2" color="textSecondary">
                      {tag}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Grid>
        {/* Sales Graph Card */}
        <Grid item xs={12} md={12}>
          <Card>
            <CardContent>
              <Typography variant="h5">Retail Sales</Typography>
              <SalesGraph salesData={product.sales} />
            </CardContent>
          </Card>
          {/* Sales Table Card */}
       
          <Card style={{ marginTop: '50px'}}>
            <CardContent>
              <SalesDataGrid salesData={product.sales} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    ))}
  </div>
  );
};

