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
    'Branding',
    'Social Media',
    'Digital Marketing',
    'Graphic Design',
    'Web Design',
  ];

  // Calculate project counts for each category
  const categoryCounts = categories.reduce<Record<FilterCategory, number>>((acc, cat) => {
    if (cat === 'All') {
      acc[cat] = projectsData.length;
    } else {
      acc[cat] = projectsData.filter((p) => p.category === cat).length;
    }
    return acc;
  }, {} as Record<FilterCategory, number>);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-8 sm:py-12 flex flex-col space-y-10 sm:space-y-12">
      {/* Header */}
      <section className="flex flex-col space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-day-muted dark:text-agency-muted uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-digitify-purple" />
          <span>Visual Portfolio Index</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tightest leading-[1] text-black dark:text-white">
          WORK THAT SPEAKS<span className="text-digitify-purple">.</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-day-subtext dark:text-agency-subtext max-w-2xl pt-2 border-t border-day-border dark:border-agency-border leading-relaxed">
          A curated visual portfolio index of strategic frameworks, campaign blueprints, and digital flagships. Scroll directly inside any card to explore project deliverables.
        </p>
      </section>

      {/* Main 2-Column Portfolio Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
        {/* Left Column: Fixed / Narrow Filter Sidebar */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 flex flex-col space-y-3.5">
          <div className="flex items-center justify-between pb-2.5 border-b border-day-border dark:border-agency-border">
            <span className="text-xs font-mono uppercase tracking-widest text-day-muted dark:text-agency-muted font-medium">
              Filter By
            </span>
            <span className="text-[11px] font-mono text-digitify-purple font-medium">
              {filteredProjects.length} {filteredProjects.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          <div className="flex flex-wrap lg:flex-col gap-2">
            {categories.map((filter) => {
              const isActive = activeFilter === filter;
              const count = categoryCounts[filter] || 0;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`group w-full sm:w-auto lg:w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-black text-white dark:bg-white dark:text-black font-semibold shadow-sm border border-black dark:border-white'
                      : 'bg-day-surface dark:bg-agency-surface text-day-subtext dark:text-agency-subtext border border-day-border dark:border-agency-border hover:border-black dark:hover:border-white/50 hover:text-black dark:hover:text-white'
                  }`}
                >
                  <span className="truncate">{filter}</span>
                  <span
                    className={`ml-2 text-[11px] font-mono px-2 py-0.5 rounded-md transition-colors ${
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

        {/* Right Column: Project Cards Grid (2 Columns on md/lg/xl) */}
        <main className="lg:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}

            {filteredProjects.length === 0 && (
              <div className="col-span-full py-20 text-center border border-dashed border-day-border dark:border-agency-border rounded-2xl">
                <p className="text-day-muted dark:text-agency-muted font-mono text-sm">
                  No projects found in category: {activeFilter}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Note & Distinction between Work & Case Studies */}
      <div className="p-4 rounded-xl border border-day-border/80 dark:border-agency-border/60 bg-day-surface/50 dark:bg-agency-surface/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-day-muted dark:text-agency-muted">
        <span>
          Looking for full strategic write-ups and behind-the-scenes metrics?
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
