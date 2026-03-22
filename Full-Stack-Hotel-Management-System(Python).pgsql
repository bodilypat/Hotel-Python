Full-Stack-Hotel-Management-System/
├── backend(Python)                            
│   │     
│   ├── app/  
│   │   ├── main.py                                            # Entry point
│   │   │
│   │   ├── core/                                              # Core Configs (Security(JWT), Config(env variables))
│   │   │   ├── config.py                                      # Settings (env variables)
│   │   │   ├── security.py                                    # JWT, password hashing   
│   │   │   └── dependencies.py                                # Global dependencies
│   │   │
│   │   ├── db/                                                # Database connection/session
│   │   │   ├── base.py                                        # Base model import
│   │   │   ├── session.py                                     # DB connecton  
│   │   │   └── init_db.py                                     # Seed data (optional)                                   
│   │   │
│   │	├── models/                                            # SQLAlchemy ORM models        
│   │	│   ├── guest.py           
│   │   │   ├── room.py
│   │   │   ├── reservation.py
│   │   │   ├── payment.py 
│   │   │   ├── service.py 
│   │   │   ├── staff.py
│   │   │   └── housekeeping.py
│   │   │  
│   │   ├── schemas/                                        # Request/response validation(Pydantic models)
│   │   │   ├── guest.py       
│   │   │   ├── room.py                 
│   │   │   ├── reservation.py     
│   │   │   ├── payment.py              
│   │   │   ├── service.py
│   │   │   └── auth.py  
│   │   │   
│   │   ├── crud/                                           # Database access layer  (Direct DB queries only, No business logic)
│   │   │   ├── guest.py       
│   │   │   ├── room.py                 
│   │   │   ├── reservation.py     
│   │   │   ├── payment.py              
│   │   │   ├── service.py
│   │   │   └── staff.py  
│   │   │
│   │	├── services/                                       # Bussiness logic layer (heart of system), Room availability, Booking rules, Billing calculation
│   │   │	├── auth_service.py       
│   │   │ 	├── booking_service.py                 
│   │   │	├── availability_service.py       
│   │   │	└── billing_service.py
│   │   │
│   │	├── api/                                             # API layer (HTTP requests, Calls services, Returns response)
│   │   │	├── deps.py                                      # DB + auth dependencies                                  
│   │   │	├── router.py                                    # Main router              
│   │	│	└── endpoints/                                   # Route modules  
│   │	│       ├── auth.py     
│   │	│       ├── guest.py
│   │	│       ├── rooms.py
│   │	│       ├── reservations.py
│   │	│       ├── payments.py
│   │   │       └── services.py
│   │	│ 
│   │	├── utils/                                           # Helper functions
│   │   │	├── logger.py                   
│   │   │	├── validators.py 
│   │   │	└── constants.py
│   │  	└── tests                                            # Unit & integration tests
│   │    	├── test_guests.py
│   │   	├── test_rooms.py                   
│   │   	└── test_reservations.py                 
│   │                                
│   ├── alembic/                                             # DB migrations
│   ├── alembic.ini                                          
│   │
│   ├── .env                                                 # Environment variables
│   ├── .gitignore
│   ├── requirements.txt
│   ├── Dockerfile                                           # Contrainerization
│   └── docker-compose.yml                                   # Multi-service setup                     
│   
├── frontend/                             
│   ├── public/                                              # Use for Static files, images that don't change SEO/meta setup
│   │   ├── index.html                                       # Main Entry
│   │   ├── manifest.json                                    # Used for PWA(Progressive Web App) support
│   │   ├── robots.txt                                       # Control search engine crawing
│   │   ├── favicon.ico                                      # Browser tab icon
│   │   └── assets/
│   │   	├── images/                                      # Branding & UI
│   │	    │   ├── hotel.jpg      
│   │	    │   ├── room1.jpg
│   │       │   └── room2.jpg  
│   │   	└── icons/                                       # Used for sidebar/navigation
│   │	        ├── dashboard.svg        
│   │	        ├── room.svg
│   │           └── booking.svg   
│   ├── src/    
│   │	├── main.jsx
│   │	├── App.jsx 
│   │	├── assets/                                          # Local assets (CSS/images)
│   │	├── components/                                      # Reusable UI components
│   │	│   ├── Navbar.jsx             
│   │	│   ├── Sidebar.jsx
│   │	│   ├── RoomCard.jsx          
│   │	│   ├── BookingForm.jsx
│   │	│   ├── CustomerCard.jsx          
│   │	│   ├── Modal.jsx
│   │	│   ├── Loader.jsx
│   │   │   └── ProtectedRoutes.jsx        
│   │	├── pages/                                          # Pages (mapped to routes)
│   │	│   ├── Dashboard.jsx        
│   │	│   ├── Guests.jsx
│   │	│   ├── Rooms.jsx 
│   │	│   ├── Reservations.jsx
│   │	│   ├── Payments.jsx
│   │	│   ├── Services.jsx
│   │   │   └── Login.jsx
│   │   │ 
│   │	├── services/                                       # API calls
│   │	│   ├── api.js        
│   │	│   ├── guestService.js
│   │	│   ├── roomService.js        
│   │	│   ├── reservationService.jsx      
│   │   │   └── authService.js
│   │	├── context/                                        # Global state
│   │   │   └── AuthContext.jsx   
│   │	├── hooks/                                          # Custom hooks       
│   │   │   └── useAuth.js  
│   │	├── utils/                                          # Helpers   
│   │   │   └── helpers.js       
│   │	├── routes/                                         # Route definitions                          
│   │   │   └── AppRoutes.jsx                               
│   │  	└── styles/   
│   │       └── AppRoutes.jsx
│   ├── .env
│   ├── .gitignore 
│   └── package.json
└── README.md
