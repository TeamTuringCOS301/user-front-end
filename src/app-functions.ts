export function checkLoggedIn(storage, toastCtrl, navCtrl)
{
  storage.get('loggedIn').then(
    (val) =>
    {
      if(val != true)
      {
        presentToast(toastCtrl, "Please log in");
        navCtrl.push('login');
        return false;
      }
      else
      {
        return true;
      }
    }
  );
  return false;
}

export function presentToast(toastCtrl, text)
{
  let toast = toastCtrl.create(
  {
    message: text,
    duration: 1500,
    position: 'bottom',
    dismissOnPageChange: false
  });
  toast.present();
}

export function addCloseListener(viewCtrl, curWin)
{
  curWin.addEventListener('popstate', () =>
  {
    viewCtrl.dismiss();
  });
}

export function openModal(modalPage, curWin)
{
  modalPage.present();
  curWin.location.href = curWin.location.href +"/#";
}
