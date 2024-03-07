// Run this in Chrome DevTools on https://tailwindcss.com/docs/customizing-colors to get the colors object
// Then `copy(colors)`
const wrapper = document.querySelector(
  '[class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1"]'
);
const colorRows = wrapper.querySelectorAll('[class="2xl:contents"]');

const colors = {};
colorRows.forEach((colorRow) => {
  const shadeWrapper = colorRow.querySelector(
    '[class="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0"]'
  );
  const shadeEls = shadeWrapper.querySelectorAll('[class="px-0.5"]');
  const shades = {};
  shadeEls.forEach((shadeEl) => {
    shades[
      shadeEl.querySelector(
        '[class="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white"]'
      ).textContent
    ] = shadeEl.querySelector(
      '[class="text-slate-500 text-xs font-mono lowercase dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs"]'
    ).textContent;
  });

  colors[
    colorRow
      .querySelector(
        '[class="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5"]'
      )
      .textContent.toLowerCase()
  ] = shades;
});
