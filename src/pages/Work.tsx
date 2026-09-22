import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projectsData, ProjectCategory } from '../data/projectsData';

type FilterCategory = 'All' | ProjectCategory;

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = [
    'All',
    'Website',
    'Digital Marketing',
    'Social Media',
  ];

  // Calculate project counts for each category (supports multi-category assignments)
  const categoryCounts = categories.reduce<Record<FilterCategory, number>>((acc, cat) => {
    if (cat === 'All') {
      acc[cat] = projectsData.length;
    } else {
      acc[cat] = projectsData.filter((p) => p.categories.includes(cat as ProjectCategory)).length;
    }
    return acc;
  }, {} as Record<FilterCategory, number>);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories.includes(activeFilter as ProjectCategory);
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-8 md:px-12 py-6 xs:py-8 sm:py-12 flex flex-col space-y-8 sm:space-y-12">
      {/* Header */}
      <section className="flex flex-col space-y-3 sm:space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>Visual Portfolio Index</span>
        </div>

        <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          WORK THAT SPEAKS<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext max-w-2xl pt-2 border-t border-day-border dark:border-agency-border leading-relaxed">
          A visual portfolio index of Digitify’s actual work across web flagships, digital campaigns, and social storytelling. Each preview is contained directly within the card for smooth internal exploration.
        </p>
      </section>

      {/* Main 2-Column Portfolio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-start">
        {/* Left Column: Horizontal Scrollable Filter on Mobile, Sticky Sidebar on Desktop */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 flex flex-col space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-day-border dark:border-agency-border">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted font-medium">
              Filter By
            </span>
            <span className="text-[11px] font-mono text-digitify-purple font-medium">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          {/* Smooth horizontal scroll pill bar on mobile, vertical stack on desktop */}
          <div className="flex lg:flex-col overflow-x-auto no-scrollbar gap-2 py-1 -mx-3.5 px-3.5 xs:-mx-4 xs:px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((filter) => {
              const isActive = activeFilter === filter;
              const count = categoryCounts[filter] || 0;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`group shrink-0 sm:shrink lg:shrink-0 w-auto lg:w-full flex items-center justify-between px-3 xs:px-3.5 py-2 xs:py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm border border-black dark:border-white'
                      : 'bg-day-surface dark:bg-agency-surface text-day-subtext dark:text-agency-subtext border border-day-border dark:border-agency-border hover:border-black dark:hover:border-white/50 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span className="whitespace-nowrap">{filter}</span>
                  <span
                    className={`ml-2 text-[10px] xs:text-[11px] font-mono px-1.5 xs:px-2 py-0.5 rounded-md transition-colors ${
                      isActive
                        ? 'bg-white/20 dark:bg-black/15 text-white dark:text-black'
                        : 'bg-day-border/50 dark:bg-agency-border/50 text-day-muted dark:text-agency-muted group-hover:text-black dark:group-hover:text-white'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Project Cards Grid (1 col on mobile, 2 on md/lg) */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 items-start">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-span-full py-16 text-center border border-dashed border-day-border dark:border-agency-border rounded-2xl">
                <p className="text-day-muted dark:text-agency-muted font-mono text-xs sm:text-sm">
                  No projects found in category: {activeFilter}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Note & Distinction between Work & Case Studies */}
      <div className="p-3.5 xs:p-4 rounded-xl border border-day-border/80 dark:border-agency-border/60 bg-day-surface/50 dark:bg-agency-surface/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 text-xs font-mono text-day-muted dark:text-agency-muted">
        <span>
          Looking for strategic case study deep-dives and delivery breakdowns?
        </span>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-1.5 text-black dark:text-white hover:text-digitify-purple transition-colors font-medium underline underline-offset-4"
        >
          <span>Explore Case Studies Section</span>
          <ArrowUpRight size={13} />
        </Link>
      </div>
    </div>
  );
};
