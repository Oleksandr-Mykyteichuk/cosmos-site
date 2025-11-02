let controller: any = null;

export function registerVideoController(api: any) {
  controller = api;
}

export function scrollToVideoProgress(progress: number) {
  if (!controller) return;
  controller.scrollToProgress(progress);
}
