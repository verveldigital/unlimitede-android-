const ANDROID_MINIMAL_CSS = String.raw`
html.unlimitede-app-minimal {
  --canvas: #0b1020 !important;
  --line: rgba(170, 188, 211, 0.14) !important;
  --line-strong: rgba(170, 188, 211, 0.24) !important;
  --ink: #eaf1fa !important;
  --muted: #94a3b8 !important;
  --cyan: #78dfe8 !important;
  --cyan-deep: #57c9d6 !important;
}
html.unlimitede-app-minimal,
html.unlimitede-app-minimal body,
html.unlimitede-app-minimal #root {
  width: 100% !important;
  min-height: 100% !important;
  margin: 0 !important;
  background: #0b1020 !important;
}
html.unlimitede-app-minimal body {
  min-width: 320px !important;
  overflow-x: hidden !important;
  color: #eaf1fa !important;
}
html.unlimitede-app-minimal .auth-screen {
  min-height: 100dvh !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  padding: 16px 16px 24px !important;
  background: #0b1020 !important;
}
html.unlimitede-app-minimal .auth-screen::before,
html.unlimitede-app-minimal .auth-glow,
html.unlimitede-app-minimal .login-card::before {
  display: none !important;
}
html.unlimitede-app-minimal .auth-layout {
  display: flex !important;
  flex-direction: column !important;
  align-items: stretch !important;
  gap: 18px !important;
  width: min(100%, 460px) !important;
  margin: 0 auto !important;
  padding: 18px 0 12px !important;
}
html.unlimitede-app-minimal .auth-story {
  max-width: none !important;
}
html.unlimitede-app-minimal .auth-story h1 {
  margin: 12px 0 10px !important;
  font-size: clamp(34px, 9vw, 46px) !important;
  line-height: 1.06 !important;
  letter-spacing: -0.045em !important;
}
html.unlimitede-app-minimal .auth-intro {
  font-size: 14px !important;
  line-height: 1.55 !important;
}
html.unlimitede-app-minimal .login-card,
html.unlimitede-app-minimal .dialog-card,
html.unlimitede-app-minimal .preview-modal {
  border: 1px solid rgba(170, 188, 211, 0.14) !important;
  border-radius: 14px !important;
  background: #101827 !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .login-card {
  padding: 20px !important;
}
html.unlimitede-app-minimal .login-card h2,
html.unlimitede-app-minimal .dialog-card h2 {
  margin: 8px 0 !important;
  font-size: 21px !important;
  letter-spacing: -0.025em !important;
}
html.unlimitede-app-minimal .auth-form {
  margin-top: 16px !important;
}
html.unlimitede-app-minimal .auth-form label,
html.unlimitede-app-minimal .dialog-card label {
  margin-bottom: 7px !important;
  font-size: 12px !important;
}
html.unlimitede-app-minimal .input-wrap {
  min-height: 48px !important;
  border: 1px solid rgba(170, 188, 211, 0.18) !important;
  border-radius: 10px !important;
  background: #0b1020 !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .input-wrap:focus-within {
  border-color: rgba(120, 223, 232, 0.72) !important;
  box-shadow: 0 0 0 2px rgba(120, 223, 232, 0.12) !important;
}
html.unlimitede-app-minimal .button-primary {
  min-height: 46px !important;
  padding: 0 16px !important;
  border: 1px solid rgba(120, 223, 232, 0.42) !important;
  border-radius: 10px !important;
  background: #78dfe8 !important;
  color: #07191d !important;
  font-size: 13px !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .button-primary:hover:not(:disabled) {
  transform: none !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .auth-footer {
  flex-wrap: wrap !important;
  gap: 8px 14px !important;
  letter-spacing: 0.07em !important;
  font-size: 9px !important;
}
html.unlimitede-app-minimal .workspace {
  min-height: 100dvh !important;
  background: #0b1020 !important;
}
html.unlimitede-app-minimal .sidebar {
  border-right: 1px solid rgba(170, 188, 211, 0.14) !important;
  background: #0e1526 !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .sidebar-open {
  box-shadow: none !important;
}
html.unlimitede-app-minimal .topbar {
  position: sticky !important;
  z-index: 30 !important;
  top: 0 !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  width: 100% !important;
  min-height: 56px !important;
  padding: 8px 12px !important;
  border-bottom: 1px solid rgba(170, 188, 211, 0.14) !important;
  background: #0b1020 !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .topbar-actions {
  flex: 1 1 auto !important;
  gap: 8px !important;
  min-width: 0 !important;
  justify-content: flex-end !important;
}
html.unlimitede-app-minimal .topbar .mobile-menu,
html.unlimitede-app-minimal .topbar .mobile-close {
  flex: 0 0 40px !important;
  width: 40px !important;
  height: 40px !important;
  border: 1px solid rgba(170, 188, 211, 0.16) !important;
  border-radius: 10px !important;
  background: #101827 !important;
}
html.unlimitede-app-minimal .topbar .search-box {
  flex: 1 1 110px !important;
  width: auto !important;
  min-width: 72px !important;
  max-width: 260px !important;
  height: 40px !important;
  border: 1px solid rgba(170, 188, 211, 0.15) !important;
  border-radius: 10px !important;
  background: #101827 !important;
}
html.unlimitede-app-minimal .topbar .search-box input {
  min-width: 0 !important;
  font-size: 13px !important;
}
html.unlimitede-app-minimal .topbar .upload-top {
  flex: 0 0 auto !important;
  min-height: 40px !important;
  border-radius: 10px !important;
  box-shadow: none !important;
  font-size: 13px !important;
}
html.unlimitede-app-minimal .topbar .avatar-button {
  flex: 0 0 40px !important;
  width: 40px !important;
  height: 40px !important;
  justify-content: center !important;
  padding: 0 !important;
}
html.unlimitede-app-minimal .content-area {
  width: 100% !important;
  padding: 22px 16px 28px !important;
}
html.unlimitede-app-minimal .page-intro {
  flex-wrap: wrap !important;
  align-items: flex-start !important;
  gap: 12px !important;
}
html.unlimitede-app-minimal .page-intro h1 {
  margin: 8px 0 4px !important;
  font-size: clamp(28px, 7.5vw, 36px) !important;
  letter-spacing: -0.045em !important;
}
html.unlimitede-app-minimal .page-subtitle {
  font-size: 13px !important;
  line-height: 1.55 !important;
}
html.unlimitede-app-minimal .filter-bar {
  flex-wrap: wrap !important;
  gap: 8px 10px !important;
  margin-top: 16px !important;
}
html.unlimitede-app-minimal .filter-group {
  flex-wrap: wrap !important;
  gap: 8px !important;
}
html.unlimitede-app-minimal .filter-select,
html.unlimitede-app-minimal .sort-button {
  min-height: 38px !important;
  border-radius: 9px !important;
}
html.unlimitede-app-minimal .file-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 12px !important;
}
html.unlimitede-app-minimal .file-card {
  min-width: 0 !important;
  border: 1px solid rgba(170, 188, 211, 0.14) !important;
  border-radius: 12px !important;
  background: #101827 !important;
  box-shadow: none !important;
  animation: none !important;
  transition: border-color 0.15s ease !important;
}
html.unlimitede-app-minimal .file-card:hover {
  transform: none !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .file-card-preview {
  height: auto !important;
  aspect-ratio: 1.5 !important;
  border-radius: 11px 11px 0 0 !important;
  background: #0f1727 !important;
}
html.unlimitede-app-minimal .file-card-body {
  padding: 12px !important;
}
html.unlimitede-app-minimal .file-title-row h3 {
  font-size: 12px !important;
}
html.unlimitede-app-minimal .file-meta {
  font-size: 11px !important;
}
html.unlimitede-app-minimal .file-card-actions {
  padding-top: 10px !important;
}
html.unlimitede-app-minimal .file-card-actions button,
html.unlimitede-app-minimal .file-card-actions a,
html.unlimitede-app-minimal .file-menu-trigger,
html.unlimitede-app-minimal .mobile-menu,
html.unlimitede-app-minimal .mobile-close {
  min-width: 40px !important;
  min-height: 40px !important;
}
html.unlimitede-app-minimal .empty-state {
  border: 1px solid rgba(170, 188, 211, 0.14) !important;
  border-radius: 14px !important;
  background: #101827 !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .modal-backdrop,
html.unlimitede-app-minimal .preview-backdrop {
  padding: 16px !important;
}
html.unlimitede-app-minimal .dialog-card,
html.unlimitede-app-minimal .preview-modal {
  max-height: calc(100dvh - 32px) !important;
  overflow: auto !important;
}
html.unlimitede-app-minimal .toast-notice {
  max-width: calc(100vw - 32px) !important;
}
html.unlimitede-app-minimal .brand-mark {
  display: inline-block !important;
  width: 32px !important;
  height: 32px !important;
  flex: 0 0 auto !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent url("https://unlimitede-hj25vd9j.manus.space/unlimitede-mark.svg") center / contain no-repeat !important;
  box-shadow: none !important;
}
html.unlimitede-app-minimal .brand-mark::before,
html.unlimitede-app-minimal .brand-mark::after,
html.unlimitede-app-minimal .brand-mark > span {
  display: none !important;
  content: none !important;
}
html.unlimitede-app-minimal .sidebar-bottom .tiny-mark {
  width: 20px !important;
  height: 20px !important;
  border: 0 !important;
  border-radius: 0 !important;
  background: transparent url("https://unlimitede-hj25vd9j.manus.space/unlimitede-mark.svg") center / contain no-repeat !important;
  color: transparent !important;
  font-size: 0 !important;
}
html.unlimitede-app-minimal .topbar .upload-top {
  display: flex !important;
  width: 40px !important;
  min-width: 40px !important;
  max-width: 40px !important;
  min-height: 40px !important;
  justify-content: center !important;
  gap: 0 !important;
  padding: 0 !important;
}
html.unlimitede-app-minimal .topbar .upload-top > span {
  display: none !important;
}
html.unlimitede-app-minimal .topbar .upload-top > svg {
  display: block !important;
  width: 18px !important;
  min-width: 18px !important;
  height: 18px !important;
  min-height: 18px !important;
  flex: 0 0 18px !important;
  visibility: visible !important;
  opacity: 1 !important;
  color: #07191d !important;
  stroke: currentColor !important;
}
@media (max-width: 380px) {
  html.unlimitede-app-minimal .topbar {
    gap: 6px !important;
    padding-right: 8px !important;
    padding-left: 8px !important;
  }
  html.unlimitede-app-minimal .topbar-actions {
    gap: 6px !important;
  }
  html.unlimitede-app-minimal .file-grid {
    grid-template-columns: 1fr !important;
  }
}
`;

const SITE_ORIGIN = "https://unlimitede-hj25vd9j.manus.space";

export const ANDROID_MINIMAL_THEME_SCRIPT = `
(function () {
  try {
    if (window.location.origin !== ${JSON.stringify(SITE_ORIGIN)}) return true;
    var root = document.documentElement;
    if (!root) return true;
    root.classList.add("unlimitede-app-minimal");
    var styleId = "unlimitede-android-minimal-theme";
    if (!document.getElementById(styleId)) {
      var style = document.createElement("style");
      style.id = styleId;
      style.textContent = ${JSON.stringify(ANDROID_MINIMAL_CSS)};
      (document.head || root).appendChild(style);
    }
  } catch (_) {}
  return true;
})();
true;
`;
