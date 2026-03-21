Fullstack-Hotel-Management-System/
├── backend/                              
│   │     
│   ├── app/  
│   │   ├── main.py                                            # Entry point
│   │   ├── routes/                                            # API endpoints
│   │   │   ├── auth.py                                        # App settings
│   │   │   ├── rooms.py                                       
│   │   │   ├── bookings.py                                     
│   │   │   ├── customers.py
│   │   │   └──                                    
│   │   │
│   │	├── models/                                            # Database tables SQLAlchemy ORM models        
│   │	│   ├── User.py           
│   │   │   ├── Room.py
│   │   │   ├── Booking.py
│   │   │   ├── Customer.py
│   │   │   └── 
│   │   │  
│   │   ├── schemas/                                           # Pydantic models(DTOS) Request/response/
│   │   │    ├── user_schema.py       
│   │   │    ├── room_schema.py                 
│   │   │    ├── booking_schema.py     
│   │   │    ├── customer_schema.py              
│   │   │    └──      
│   │	├── services/                                         # Bussiness logic layer
│   │   │	├── auth_service.py       
│   │   │ 	├── room_service.py                 
│   │   │	├── booking_service.py       
│   │   │	└──  
│   │   │
│   │	├── db/                           
│   │   │	├── database.py                                  # Database connection
│   │   │	├──               
│   │	│	└──         
│   │	│ 
│   │	├── core/                           
│   │   │	├── config.py                     
│   │   │	└── security.py  
│   │  	└── ...                
│   │                                
│   ├── .env
│   └── requirements.txt                         
│   
├── frontend/                             
│   ├── public/                                                         # Use for Static files, images that don't change SEO/meta setup
│   │   ├── index.html                                                  # Main Entry
│   │   ├── manifest.json                                               # Used for PWA(Progressive Web App) support
│   │   ├── robots.txt                                                  # Control search engine crawing
│   │   ├── favicon.ico                                                 # Browser tab icon
│   │   └── assets/
│   │   	├── images/                                                 # Branding & UI
│   │	    │   ├── hotel.jpg      
│   │	    │   ├── room1.jpg
│   │	    │   ├── room2.jpg
│   │       │   └──   
│   │   	└── icons/                                                  # Used for sidebar/navigation
│   │	        ├── dashboard.svg        
│   │	        ├── room.svg
│   │	        ├── booking.svg
│   │           └──    
│   ├── src/                                    
│   │	├── components/                          
│   │	│   ├── Navbar.jsx             
│   │	│   ├── Sidebar.jsx
│   │	│   ├── RoomCard.jsx          
│   │	│   ├── BookingForm.jsx
│   │	│   ├── CustomerCard.jsx          
│   │	│   ├── Modal.jsx
│   │	│   ├── Loader.jsx
│   │	│   ├── ProtectedRoutes.jsx
│   │   │   └──             
│   │	├── pages/                          
│   │	│   ├── Dashboard.jsx        
│   │	│   ├── Rooms.jsx
│   │	│   ├── Bookings.jsx 
│   │	│   ├── Customer.jsx
│   │	│   ├── Login.jsx     
│   │   │   └──             
│   │   │ 
│   │	├── services/                          
│   │	│   ├── api.js        
│   │	│   ├── roomService.js
│   │	│   ├── bookingService.js        
│   │	│   ├── authService.jsx
│   │	│   ├──         
│   │   │   └──        
│   │	├── context/                          
│   │	│   ├── AuthContext.jsx
│   │   │   └──     
│   │	├── hooks/                               
│   │	│   ├── useAuth.jsx
│   │	│   ├── useFetch.js        
│   │   │   └──   
│   │	├── utils/                               
│   │	│   ├── helpers.js        
│   │   │   └──         
│   │	├── assets/                               
│   │	│   ├── images/     
│   │   │   └──         
│   │	├── routes/                               
│   │	│   ├── AppRoutes.jsx
│   │   │   └──                                
│   │  	└── ...   
│   ├── App.jsx 
│   └── main.jsx
├── .env                                        # Environment variables
├── .gitignore
├── package.json
│
└── README.md
