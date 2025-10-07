import React from 'react';

// --- SVG Icons ---
// I've kept your self-contained SVGs but removed the Tailwind size classes.
// We'll control their size and color with Bootstrap's text utilities and some inline styles.

const iconStyles = { width: '24px', height: '24px' };

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" style={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const SubscriptionsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-1 8h.01" />
    </svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
);

const ExploreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
);

// --- Reusable Components (Bootstrap Version) ---

const SidebarLink = ({ icon, text, isActive }) => (
  <a href="#" className={`nav-link d-flex align-items-center p-3 rounded-3 ${isActive ? 'active bg-primary-subtle text-primary-emphasis fw-semibold' : 'text-dark'}`}>
    <span className="me-3">{icon}</span>
    <span className="d-none d-lg-inline">{text}</span>
  </a>
);

const ArticleCard = ({ category, title, description, author, readTime, imageUrl, tag }) => (
  <div className="d-flex justify-content-between align-items-start py-4 border-bottom">
    <div className="pe-4">
      <p className="text-primary fw-semibold mb-1" style={{fontSize: '0.9rem'}}>{category}</p>
      <h3 className="h4 fw-bold text-body-emphasis mb-2">{title}</h3>
      <p className="text-secondary mb-3">{description}</p>
      <div className="d-flex align-items-center" style={{fontSize: '0.9rem'}}>
        <span className="text-muted">{author}</span>
        <span className="mx-2 text-muted">·</span>
        <span className="text-muted">{readTime} min read</span>
        {tag && <span className="ms-3 badge text-bg-warning-subtle text-warning-emphasis rounded-pill">{tag}</span>}
      </div>
    </div>
    <img src={imageUrl} alt="Article thumbnail" className="rounded-3 d-none d-sm-block" style={{ width: '160px', height: '112px', objectFit: 'cover' }} />
  </div>
);

const BestsellerItem = ({ rank, title, subtitle, imageUrl }) => (
  <div className="d-flex align-items-center py-2">
    <span className="h5 fw-bold text-body-tertiary me-3">{rank}</span>
    <img src={imageUrl} alt={title} className="rounded-circle me-3" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
    <div className="flex-grow-1">
      <p className="fw-semibold text-body-emphasis mb-0">{title}</p>
      <p className="text-muted mb-0" style={{fontSize: '0.9rem'}}>{subtitle}</p>
    </div>
    <button className="btn btn-outline-secondary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width: '38px', height: '38px'}}>
      <PlusIcon />
    </button>
  </div>
);

// --- Main Home Component (Bootstrap Version) ---

export default function Home() {
  return (
    <div className="bg-body-tertiary min-vh-100">
        <div className="container-fluid">
            <div className="row">
                {/* Left Sidebar */}
                <aside className="col-auto col-lg-2 px-sm-2 px-0 bg-body-secondary" style={{minHeight: '100vh'}}>
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 position-sticky top-0">
                         <div className="d-flex align-items-center fs-2 pb-3 mb-md-0 me-md-auto text-dark text-decoration-none mt-3 mb-4">
                            <svg className="text-primary" style={{width: '32px', height: '32px'}} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-5.747-8.247l11.494 4.99m-11.494 0l11.494-4.99m-5.747 8.247l-5.747-2.5m5.747 2.5l5.747-2.5M3.253 9.75l5.747-2.5m-5.747 2.5l5.747 2.5m0-8.247l-5.747 2.5m5.747-2.5v11.494" />
                            </svg>
                            <span className="fs-4 d-none d-lg-inline ms-3  fw-bold ">BLOGZIFY</span>
                        </div>
                        <nav className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
                           <SidebarLink icon={<HomeIcon />} text="Home" isActive />
                           <SidebarLink icon={<SubscriptionsIcon />} text="Subscriptions" />
                           <SidebarLink icon={<ChatIcon />} text="Chat" />
                           <SidebarLink icon={<ActivityIcon />} text="Activity" />
                           <SidebarLink icon={<ExploreIcon />} text="Explore" />
                           <SidebarLink icon={<ProfileIcon />} text="Profile" />
                        </nav>
                        <div className="w-100 px-lg-2 pb-4">
                           <button className="btn btn-primary w-100 py-2">
                                <span className="d-none d-lg-inline">Create</span>
                                <span className="d-inline d-lg-none">+</span>
                           </button>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="col-lg-7 col-xl-6 py-4 px-md-5">
                    <header className="border-bottom pb-2 mb-3">
                        <nav className="nav nav-underline">
                            <a className="nav-link active text-primary" aria-current="page" href="#">Staff Picks</a>
                            <a className="nav-link text-dark" href="#">Culture</a>
                            <a className="nav-link text-dark" href="#">Technology</a>
                            <a className="nav-link text-dark" href="#">Business</a>
                            <a className="nav-link text-dark" href="#">U.S. Politics</a>
                            <a className="nav-link text-dark" href="#">Finance</a>
                            <a className="nav-link text-dark" href="#">Food & Drink</a>
                        </nav>
                    </header>

                    <div>
                        <ArticleCard category="KNOWINGLESS" title="What Your Favorite Dance Music Says About You" description="Results from the danceable music survey." author="Aella" readTime="7" tag="PAID" imageUrl="https://placehold.co/160x112/a0c4ff/333?text=Abstract"/>
                        <ArticleCard category="THE WARDROBE EDIT" title="How To Be Organised in 2025" description="29 ideas to make you feel like you have your s**t together..." author="Anna Newton" readTime="14" imageUrl="https://placehold.co/160x112/99d98c/333?text=Lifestyle"/>
                        <ArticleCard category="THE GENE POOL" title="Courage & Cowardice" description="Hello." author="Gene Weingarten" readTime="15" imageUrl="https://placehold.co/160x112/e5e5e5/333?text=Portrait"/>
                        <ArticleCard category="BITS & PIECES" title="The Sweet Spot" description="A memoir in four parts." author="John Doe" readTime="9" imageUrl="https://placehold.co/160x112/ffd6a5/333?text=Story"/>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="d-none d-xl-block col-xl-3 py-4">
                    <div className="position-sticky top-0 p-3 bg-white rounded-3 shadow-sm" style={{marginTop: '1rem'}}>
                        <h4 className="fw-bold mb-3">Rising in Bestsellers</h4>
                        <div className="mb-3">
                            <BestsellerItem rank="1" title="Za" subtitle="Za's Market Terminal" imageUrl="https://placehold.co/40x40/fca311/fff?text=Z" />
                            <BestsellerItem rank="2" title="The 50501 Movement" subtitle="The 50501 Movement" imageUrl="https://placehold.co/40x40/14213d/fff?text=50" />
                            <BestsellerItem rank="3" title="Our Amagansett House" subtitle="Our Amagansett House" imageUrl="https://placehold.co/40x40/0077b6/fff?text=O" />
                            <BestsellerItem rank="4" title="Kat Jamieson" subtitle="With Love From Kat 2.0" imageUrl="https://placehold.co/40x40/d62828/fff?text=K" />
                            <BestsellerItem rank="5" title="The Menopause Professor" subtitle="The Menopause Professor" imageUrl="https://placehold.co/40x40/2a9d8f/fff?text=M" />
                        </div>
                        <button className="btn btn-dark w-100">Get app</button>
                    </div>
                </aside>
            </div>
        </div>
    </div>
  );
}