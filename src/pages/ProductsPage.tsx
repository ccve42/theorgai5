import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { products } from '../data/products';
import VoiceDemo from '../components/VoiceDemo';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to specific product section if hash is provided
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black/96 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] z-0"></div>
        {/* Hero background decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/[0.01] blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-4 animate-pulse-slow">
              <span className="text-white/80 text-sm font-medium">Intelligent Solutions</span>
            </div>
            <h1 className="mb-6">AI Solutions That Work For You</h1>
            <p className="text-neutral-300 text-lg mb-10">
              Discover how our AI technologies can automate customer interactions, boost conversions, and transform your business operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {products.map(product => (
                <a
                  key={product.id}
                  href={`#${product.id}`}
                  className="transition-all duration-300 px-6 py-3 rounded-full bg-white/5 border border-neutral-700 hover:border-white hover:bg-white/10 text-white font-medium flex items-center gap-2 group"
                >
                  {product.title}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Sections */}
      {products.map((product, index) => (
        <section 
          key={product.id}
          id={product.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'bg-black/90'} relative overflow-hidden`}
        >
          {/* Background decorative elements */}
          <div className={`absolute ${index % 2 === 0 ? 'top-20 right-20' : 'bottom-20 left-20'} w-96 h-96 rounded-full bg-white/[0.01] blur-3xl pointer-events-none`}></div>
          
          {/* Animated dots pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <div className="absolute w-1 h-1 bg-white rounded-full top-[20%] left-[15%] animate-pulse"></div>
            <div className="absolute w-1 h-1 bg-white rounded-full top-[40%] left-[25%] animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="absolute w-1 h-1 bg-white rounded-full top-[15%] right-[20%] animate-pulse" style={{animationDelay: "0.3s"}}></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Product Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5">
                    <span className="text-white/80 text-sm font-medium">
                      {product.id === 'ai-assistance' ? 'Chat Intelligence' : 'Voice Technology'}
                    </span>
                  </div>
                  <h2 className="mb-6">{product.title}</h2>
                  <p className="text-neutral-300 text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  {/* Stats indicators */}
                  <div className="flex flex-wrap gap-4 mt-6">
                    <div className="bg-white/5 border border-neutral-700 rounded-lg px-4 py-3 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <p className="text-white font-bold text-xl mb-1">
                        {product.id === 'ai-assistance' ? '300%' : '80%'}
                      </p>
                      <p className="text-neutral-400 text-xs">
                        {product.id === 'ai-assistance' ? 'Lead Growth' : 'Faster Response'}
                      </p>
                    </div>
                    <div className="bg-white/5 border border-neutral-700 rounded-lg px-4 py-3 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <p className="text-white font-bold text-xl mb-1">24/7</p>
                      <p className="text-neutral-400 text-xs">Availability</p>
                    </div>
                    <div className="bg-white/5 border border-neutral-700 rounded-lg px-4 py-3 flex flex-col items-center hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                      <p className="text-white font-bold text-xl mb-1">50%</p>
                      <p className="text-neutral-400 text-xs">Cost Reduction</p>
                    </div>
                  </div>
                </div>
                
                <div className={`h-80 md:h-96 overflow-hidden rounded-2xl shadow-2xl shadow-black/50 relative group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/40 z-10 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Floating tag */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center gap-2 z-20">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-white text-sm font-medium">{product.id === 'ai-assistance' ? 'AI Chatbot' : 'Voice AI'}</span>
                  </div>
                </div>
              </div>
              
              {/* Features Section with Enhanced Design */}
              <div className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-2xl font-semibold">Key Features</h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 p-6 bg-black/60 backdrop-blur-sm border border-neutral-800 rounded-xl transition-all duration-300 hover:border-neutral-700 hover:bg-black/70 group hover:shadow-glow-sm hover:translate-y-[-2px]"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-black/80 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-lg mb-2 group-hover:text-white/90 transition-colors">{feature}</p>
                        <p className="text-neutral-400 text-sm">
                          {/* Generate a short description based on the feature */}
                          {feature.includes('lead') ? 'Automatically identify and qualify potential customers.' :
                           feature.includes('CRM') ? 'Seamlessly connect with your existing customer systems.' :
                           feature.includes('support') ? 'Handle customer inquiries with intelligent automation.' :
                           feature.includes('appointment') ? 'Schedule meetings without human intervention.' :
                           feature.includes('voice') ? 'Natural-sounding conversations with customers.' :
                           feature.includes('language') ? 'Support customers in their preferred language.' :
                           feature.includes('24/7') ? 'Never miss an opportunity, day or night.' :
                           'Enhance your business operations with smart automation.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Demo Section - Different for each product */}
              {product.id === 'ai-assistance' ? (
                <div className="mb-20">
                  <div className="flex items-center gap-3 mb-10">
                    <h3 className="text-white text-2xl font-semibold">See It In Action</h3>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <div className="glassmorphism rounded-xl overflow-hidden p-8 shadow-glow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white text-xl font-medium mb-4">Interactive Chatbot</h4>
                        <p className="text-neutral-300 mb-6">
                          Experience how our AI assistance can engage with your customers, capture leads, and manage support tickets. Try the interactive demo on the bottom right of your screen.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                            <h5 className="text-white font-medium mb-2">Lead Capture</h5>
                            <p className="text-neutral-400 text-sm">
                              The AI identifies potential leads and collects relevant information to qualify them.
                            </p>
                          </div>
                          <div className="bg-black/40 border border-neutral-800 rounded-lg p-5 hover:border-neutral-700 transition-all duration-300">
                            <h5 className="text-white font-medium mb-2">CRM Integration</h5>
                            <p className="text-neutral-400 text-sm">
                              Customer information is automatically added to your CRM, eliminating manual data entry.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="h-full flex items-center justify-center">
                          <div className="w-64 h-96 rounded-2xl border border-neutral-800 bg-black/60 overflow-hidden shadow-lg relative">
                            <div className="absolute inset-0 flex flex-col">
                              <div className="p-4 border-b border-neutral-800">
                                <h4 className="text-white font-medium">AI Chat Assistant</h4>
                              </div>
                              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                                <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                                  <p className="text-sm">Hi there! How can I assist you today?</p>
                                </div>
                                <div className="bg-white text-black rounded-lg p-3 max-w-[80%] ml-auto">
                                  <p className="text-sm">I'm interested in your AI solutions</p>
                                </div>
                                <div className="bg-neutral-800 text-white rounded-lg p-3 max-w-[80%]">
                                  <p className="text-sm">Great! I'd be happy to tell you about our AI solutions. Would you like to schedule a demo?</p>
                                </div>
                              </div>
                              <div className="p-4 border-t border-neutral-800">
                                <div className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 bg-black/60 border border-neutral-700 rounded-lg px-3 py-2 text-white text-sm"
                                    disabled
                                  />
                                  <button className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-20">
                  <div className="flex items-center gap-3 mb-10">
                    <h3 className="text-white text-2xl font-semibold">Hear It In Action</h3>
                    <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                  </div>
                  <VoiceDemo />
                </div>
              )}
              
              {/* Integration Section with Enhanced Design */}
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-neutral-800 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 16H6C4.89543 16 4 15.1046 4 14V10C4 8.89543 4.89543 8 6 8H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 16H18C19.1046 16 20 15.1046 20 14V10C20 8.89543 19.1046 8 18 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-semibold">Seamless Integration</h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-white/30 to-transparent"></div>
                </div>
                
                <div className="glassmorphism rounded-xl overflow-hidden p-8 shadow-glow-sm relative">
                  {/* Background decorative elements */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
                  
                  <p className="text-neutral-300 mb-8 text-lg relative z-10">
                    {product.id === 'ai-assistance'
                      ? 'Our AI Assistance seamlessly integrates with your existing tech stack, including:'
                      : 'Our Voice AI technology easily connects with your current phone systems and software, including:'}
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 relative z-10">
                    {['Salesforce', 'HubSpot', 'Zendesk', 'Microsoft Teams', 'Zoom', 'Slack', 'Google Workspace', 'Shopify'].map((integration) => (
                      <div 
                        key={integration} 
                        className="bg-black/40 border border-neutral-800 rounded-xl p-6 text-center hover:border-neutral-700 hover:bg-black/50 transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-neutral-700 flex items-center justify-center mx-auto mb-3 group-hover:border-neutral-600 transition-colors">
                          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <p className="text-white font-medium group-hover:text-white/90 transition-colors">{integration}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex items-center gap-4 py-4 px-5 bg-white/5 rounded-lg border border-neutral-800 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2"/>
                        <path d="M12 16V12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M12 8H12.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium mb-1">Don't see your system?</p>
                      <p className="text-neutral-400 text-sm">
                        Contact us for custom integration options. We support over 100+ platforms and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section with Enhanced Design */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black z-0"></div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glassmorphism p-14 rounded-2xl relative overflow-hidden shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/50 to-black/80 z-0"></div>
            <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
            <div className="absolute -left-40 -bottom-40 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-5">
                <span className="text-white/80 text-sm font-medium">Transform Your Business</span>
              </div>
              <h2 className="mb-6">Ready to Get Started?</h2>
              <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
                Transform your business with our intelligent AI solutions. Book a demo today to see the power of AI in action.
              </p>
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg shadow-glow-sm"
              >
                Schedule Your Demo
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;