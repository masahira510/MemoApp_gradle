document.addEventListener('DOMContentLoaded', () => {
  const TITLE_INPUT = document.getElementById('js-title-input');
  const DETAIL_INPUT = document.getElementById('js-detail-input');
  const WARNING = document.getElementById('js-title-warning');
  const SUBMIT_BTN = document.getElementById('js-submit-btn');
  const MAX_TITLE_LENGTH = 60; // 文字数上限

  const VALIDATE_INPUT = () => {
    const TITLE = TITLE_INPUT.value.trim();
    const DETAIL = DETAIL_INPUT.value.trim();
    const TITLE_TOO_LONG = TITLE.length > MAX_TITLE_LENGTH;
    const TITLE_EMPTY = TITLE.length === 0;
    const DETAIL_EMPTY = DETAIL.length === 0;

    // 警告制御
    WARNING.classList.toggle('hidden', !TITLE_TOO_LONG);
    TITLE_INPUT.classList.toggle('input-error', TITLE_TOO_LONG);

    // 登録ボタン制御（登録不可の条件）
    const INVALID = TITLE_EMPTY || DETAIL_EMPTY || TITLE_TOO_LONG;
    SUBMIT_BTN.disabled = INVALID;
    };

  // 入力監視
  TITLE_INPUT.addEventListener('input', VALIDATE_INPUT);
  DETAIL_INPUT.addEventListener('input', VALIDATE_INPUT);

  // ページロード
  VALIDATE_INPUT();
});