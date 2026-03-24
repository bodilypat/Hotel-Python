Full-Stack-Hotel-Management-System/
├── backend(Python)                            
│   │     
│   ├── app/  
│   │   ├── main.py                                            # Entry point
│   │   │
│   │   ├── core/                                              # Core Configs (Security(JWT), Config(env variables))
│   │   │   ├── config.py                                      # Settings (env variables)
│   │   │   ├── security.py                                    # JWT, password hashing   
│   │   │   └── database.py                                    # Global dependencies
│   │   │
│   │	├── api/                                               # API layer (HTTP requests, Calls services, Returns response)                              
│   │   │	├── v1/              
│   │	│   │   ├── router.py                                  # Combine all routes
│   │   │   │   └── endpoints/                                 # FastAPI Endpoints
│   │	│   │       ├── auth.py
│   │	│   │       ├── romms.py
│   │	│   │       ├── bookings.py
│   │	│   │       ├── guests.py
│   │	│   │       ├── payments.py
│   │   │   │       └── dashboard.py
│   │	│   │
│   │	├── models/                                            # SQLAlchemy ORM models        
│   │	│   ├── user.py           
│   │   │   ├── room.py
│   │   │   ├── booking.py
│   │   │   ├── guest.py
│   │   │   └── payment.py
│   │	│
│   │   ├── schemas/                                           # Request/response validation(Pydantic models)
│   │   │   ├── user.py       
│   │   │   ├── room.py                           
│   │   │   ├── booking.py
│   │   │   ├── guest.py
│   │   │   └── payment.py
│   │   │
│   │	├── services/                                          # Bussiness logic layer (heart of system)
│   │   │	├── auth_service.py       
│   │   │ 	├── rook_service.py                 
│   │   │	├── booking_service.py 
│   │   │   ├── guest_service.py      
│   │   │	└── payment_service.py
│   │	│
│   │   ├── crud/                                              # Database queries
│   │   │   ├── user.py       
│   │   │   ├── room.py                 
│   │   │   ├── booking.py    
│   │   │   ├── guest.py 
│   │   │   └── guest.py                                     
│   │   │
│   │	├── middleware/                                        # Helper functions
│   │   │	├── auth.py                   
│   │   │	└── error_hander.py
│   │   │
│   │	├── utils/                                             
│   │   │	└── helpers.py
│   │  	└── cosntants/                                        #          
│   │   	└── roles.py                 
│   │                                
│   ├── alembic/                                              # DB migrations
│   ├── requirements.txt
│   ├── .env                                              
│   └── docker-compose.yml                                    # Multi-service setup                     
│   
├── frontend/                             
│   ├── public/                                               # Use for Static files, images that don't change SEO/meta setup
│   │   ├── index.html                                        # Main Entry
│   │   ├── manifest.json                                     # Used for PWA(Progressive Web App) support
│   │   ├── robots.txt                                        # Control search engine crawing
│   │   ├── favicon.ico                                       # Browser tab icon
│   │   └── assets/                                           # ONLY static, non-imported assets
│   │   	├── images/                                       # Branding & UI
│   │	    │   ├── hotel.jpg      
│   │	    │   ├── room1.jpg
│   │       │   └── room2.jpg  
│   │   	└── icons/                                       # Used for sidebar/navigation
│   │	        ├── dashboard.svg        
│   │	        ├── room.svg
│   │           └── booking.svg   
│   ├── src/    
│   │	├── app/                                             # App-level setup
│   │   │	├── App.jsx                                      # Branding & UI
│   │   │	├── main.jsx    
│   │   │	└── providers/                                   # Global providers   
│   │	│       ├── AuthProvider.jsx
│   │   │       └── QueryProvider.jsx  
│   │	├── routes/                                         
│   │   │	├── AppRoutes.jsx                                      
│   │   │	├── ProtectedRoute.jsx    
│   │   │	└── routeConfig.js                               # Centralized route definitions 
│   │   │
│   │	├── features  /                                      # Feature-based architecture 
│   │	│   ├── auth/     
│   │	│   │   ├── pages/
│   │   │   │   │   └── Login.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── authService.js
│   │	│   │   ├── hooks/
│   │   │   │   │   └── useAuth.js
│   │   │   │   └── context/
│   │   │   │       └── AuthContext.jsx   
│   │	│   ├── rooms/
│   │	│   │   ├── components/
│   │   │   │   │   └── RoomCard.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── RoomService.js
│   │   │   │   └── pages/
│   │   │   │       └── Rooms.jsx 
│   │	│   ├── bookings/
│   │	│   │   ├── components/
│   │   │   │   │   └── BookingForm.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── reservationService.js
│   │   │   │   └── pages/
│   │   │   │       └── Reservations.jsx   
│   │	│   ├── guests/
│   │	│   │   ├── components/
│   │   │   │   │   └── CustomerCard.jsx
│   │	│   │   ├── services/
│   │   │   │   │   └── guestService.js
│   │   │   │   └── pages/ 
│   │   │   │       └── Guests.jsx 
│   │	│   ├── payments/      
│   │   │   │   └── pages/  
│   │   │   │       └── Payments.jsx 
│   │   │   └── dashboard/  
│   │   │       └── context/
│   │   │           └── Dashboard.jsx
│   │   │ 
│   │	├── shared/                                           # Reusable acros features
│   │	│   ├── components/    
│   │	│   │   ├── ui/
│   │	│   │   │   ├── Loader.jsx
│   │   │   │   │   └── Modal.jsx
│   │   │   │   └── layout/
│   │	│   │       ├── Navbar.jsx
│   │   │   │       └── Sidebar.jsx
│   │	│   ├── hooks/
│   │	│   │   ├── useDebounce.js
│   │   │   │   └── useFetch.js
│   │	│   ├── utils/
│   │   │   │   └── helpers.js
│   │   │   └── constants/
│   │   │       └── helpers.js
│   │   │ 
│   │	├── services/                                        # Global API config 
│   │   │   └── api.js
│   │	├── assets/                                          # Imported assets ONLY
│   │   │	├── images/                                     
│   │   │	└── styles/                                       
│   │	│       ├── globals.css
│   │   │       └── variables.css
│   │   │
│   │	├── config/                                          # Environment & config
│   │   │	├── env.js                                    
│   │   │	└── axiosConfig.js                                    
│   │  	└── index.css
│   ├── .env
│   ├── .gitignore 
│   └── package.json
└── README.md
