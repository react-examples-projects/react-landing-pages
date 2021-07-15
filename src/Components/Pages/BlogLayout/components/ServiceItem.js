export default function ServiceItem({ icon = "car" }) {
  return (
    <div class="services-item">
      <i class={`fa fa-${icon} icon`} />
      <p>
        Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
        Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
        tempus aliquam.
      </p>
    </div>
  );
}
