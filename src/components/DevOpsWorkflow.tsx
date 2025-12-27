import React from 'react';
import { Code2, GitBranch, Cpu, Layout, Rocket, Server, Wrench, BarChart2 } from 'lucide-react';

const DevOpsWorkflow = () => {
  const stages = [
    { name: 'PLAN', icon: <GitBranch className="w-6 h-6" /> },
    { name: 'CODE', icon: <Code2 className="w-6 h-6" /> },
    { name: 'BUILD', icon: <Cpu className="w-6 h-6" /> },
    { name: 'TEST', icon: <Layout className="w-6 h-6" /> },
    { name: 'RELEASE', icon: <Rocket className="w-6 h-6" /> },
    { name: 'DEPLOY', icon: <Server className="w-6 h-6" /> },
    { name: 'OPERATE', icon: <Wrench className="w-6 h-6" /> },
    { name: 'MONITOR', icon: <BarChart2 className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden min-h-[650px] flex items-center">
      <div className="container mx-auto px-4 relative">
        
        {/* Central DevOps Header */}
        <div className="text-center mb-32 relative">
          <h2 className="text-8xl md:text-9xl font-bold tracking-tighter opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
            DevOps
          </h2>
          <div className="relative z-10">
            <h3 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight">
              DevOps <span className="text-primary">Workflow</span>
            </h3>
            <p className="text-muted-foreground mt-4 font-medium tracking-[0.2em] uppercase text-sm">Continuous Integration & Delivery</p>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Animated SVG Connectors */}
          <svg 
            className="absolute top-[-120px] left-0 w-full h-[180px] pointer-events-none z-0" 
            viewBox="0 0 1000 150" 
            fill="none"
          >
            {/* Fix: const xPos (removed space) */}
            {stages.map((_, i) => {
              const xPos = 62.5 + (i * 125); 
              return (
                <g key={i}>
                  {/* Static Background Path */}
                  <path
                    d={`M 500,10 L 500,40 Q 500,70 ${xPos},70 L ${xPos},145`}
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4,4"
                    className="text-primary/20"
                  />
                  {/* Animated Flowing Path */}
                  <path
                    d={`M 500,10 L 500,40 Q 500,70 ${xPos},70 L ${xPos},145`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="animate-flow-dots"
                    style={{
                      animation: `flow 4s linear infinite`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                </g>
              );
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Stages Grid */}
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {stages.map((stage) => (
              <div key={stage.name} className="flex flex-col items-center group">
                {/* Connector Dot */}
                <div className="w-2.5 h-2.5 rounded-full bg-primary/30 mb-6 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                
                {/* Icon Wrapper */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mb-4 
                              group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500">
                  <div className="text-primary group-hover:text-primary transition-colors duration-300">
                    {stage.icon}
                  </div>
                </div>
                
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors">
                  {stage.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flow {
          from {
            stroke-dashoffset: 100;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-flow-dots {
          stroke-dashoffset: 100;
        }
      `}</style>
    </section>
  );
};

export default DevOpsWorkflow;