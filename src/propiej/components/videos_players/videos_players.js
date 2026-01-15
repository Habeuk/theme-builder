const block_video_paragraph = {
  attach(context) {
    /**
     * INITIALISATION DES BLOCKS
     * -------------------------
     * once() garantit :
     * - pas de duplication
     * - compatibilité AJAX / BigPipe
     */
    const blocks = document.querySelectorAll(".block_video_paragraph");
    blocks.forEach((block) => {
      const video = block.querySelector("figure video");
      if (video) {
        this.createVideoControls(video, block);
        this.bindBlockClick(video, block);
      }
    });

    /**
     * HANDLERS GLOBAUX
     * ----------------
     * Attachés UNE SEULE FOIS
     */
    this.attachGlobalHandlers();
  },

  /**
   * =========================================
   * HANDLERS GLOBAUX (1 seule fois)
   * =========================================
   */
  attachGlobalHandlers() {
    if (this._globalsAttached) return;
    this._globalsAttached = true;

    // Click sur overlay → fermer
    document.addEventListener("click", (e) => {
      document.querySelectorAll(".block_video_paragraph.show-video").forEach((block) => {
        const videoContainer = block.querySelector(".content-video");
        if (videoContainer && !videoContainer.contains(e.target) && !e.target.closest(".layout-region.main")) {
          this.closeVideo(block);
        }
      });
    });

    // Touche ESC → fermer
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".block_video_paragraph.show-video").forEach((block) => this.closeVideo(block));
      }
    });
  },

  /**
   * =========================================
   * CLICK SUR LE BLOCK (ouvrir la vidéo)
   * =========================================
   */
  bindBlockClick(video, block) {
    block.addEventListener("click", (e) => {
      // Ignore clics sur contrôles
      if (e.target.closest(".video-controls")) return;

      if (!block.classList.contains("show-video")) {
        block.classList.add("show-video");
        video.play().catch(() => {});
      }
    });
  },

  /**
   * =========================================
   * CRÉATION DES CONTRÔLES VIDÉO (JS ONLY)
   * =========================================
   */
  createVideoControls(video, block) {
    if (video.parentNode.querySelector(".video-controls")) return;

    const controls = document.createElement("div");
    controls.className = "video-controls";
    controls.innerHTML = `
        <button class="control-btn play-pause" aria-label="Lecture / Pause">
          <span class="play"> <svg class="play-icon" width="24" height="24" viewBox="0 0 24 24" style="display: block;">
            <path d="M8 5v14l11-7z"></path>
          </svg> </span>
          <span class="pause" hidden> 
            <svg class="pause-icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
            </svg>
          </span>
        </button>

        <input type="range" class="progress" min="0" max="100" value="0">

        <button class="control-btn volume-btn" aria-label="Volume">
          <svg class="volume-high" width="24" height="24" viewBox="0 0 24 24" style="display: block;">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
          </svg>
          <input type="range" class="volume" min="0" max="1" step="0.1" value="1">
        </button>        
      `;
    const closeBtn = document.createElement("button");
    closeBtn.className = "control-btn close-btn";
    closeBtn.setAttribute("aria-label", "Fermer");
    closeBtn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
      `;
    video.parentNode.appendChild(closeBtn);
    video.parentNode.appendChild(controls);

    this.bindControls(video, block, controls);
  },

  /**
   * =========================================
   * BIND DES CONTRÔLES
   * =========================================
   */
  bindControls(video, block, controls) {
    const playPause = controls.querySelector(".play-pause");
    const playIcon = playPause.querySelector(".play");
    const pauseIcon = playPause.querySelector(".pause");
    const closeBtn = block.querySelector(".close-btn");
    const progress = controls.querySelector(".progress");
    const volume = controls.querySelector(".volume");

    // Play / Pause
    playPause.addEventListener("click", (e) => {
      e.stopPropagation();
      video.paused ? video.play() : video.pause();
    });

    // Close
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.closeVideo(block);
    });

    // Progress update
    video.addEventListener("timeupdate", () => {
      progress.value = (video.currentTime / video.duration) * 100 || 0;
    });

    // Seek
    progress.addEventListener("input", (e) => {
      video.currentTime = (e.target.value / 100) * video.duration;
    });

    // Volume
    volume.addEventListener("input", (e) => {
      video.volume = e.target.value;
    });

    // UI Sync
    video.addEventListener("play", () => {
      playIcon.hidden = true;
      pauseIcon.hidden = false;
      document.body.classList.add("overflow-hidden");
    });

    video.addEventListener("pause", () => {
      playIcon.hidden = false;
      pauseIcon.hidden = true;
    });
    // fermeture automatique à la fin de la vidéo.
    //video.addEventListener("ended", () => this.closeVideo(block));
  },

  /**
   * =========================================
   * FERMETURE VIDÉO
   * =========================================
   */
  closeVideo(block) {
    document.body.classList.remove("overflow-hidden");
    const video = block.querySelector("figure video");
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    block.classList.remove("show-video");
  },
};
block_video_paragraph.attach(document);
