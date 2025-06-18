import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';
import * as React from 'react'

function Dashboard(){
    const cards = [
        {
          id: 1,
          title: 'Users',
          description: 10,
        },
        {
          id: 2,
          title: 'Customers',
          description: 100,
        },
        {
          id: 3,
          title: 'Reports',
          description: 200,
        },
    ];

    return(
        <Box className="bg-slate-100 flex flex-wrap justify-around gap-4 p-4">
            {cards.map((card, index) => (
                <Card 
                    key={index}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                    sx={{ 
                        maxWidth: 300,
                        background: "linear-gradient(to bottom, #6EE7B7, #3B82F6)", // Green to Blue
                        color: "white", // Text color }} // Controls card width
                    }}
                >
                    <CardActionArea
                        sx={{
                            height: '100%',
                        }}
                    >
                        <CardContent sx={{ height: '100%' }} className='text-center'>
                        <Typography variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            {card.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    )
}

export default Dashboard;