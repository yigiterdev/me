import Image from "next/image";

function WorkExperience() {
  return (
    <div className="card">
      <h1 className="typography--h2 mb-3 text-color--lime">WORK EXPERIENCE</h1>

      <div>
        <div className="py-3 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-md"
              src="/hipo.png"
              alt="Hipo"
              width="75"
              height="75"
            />

            <div>
              <h1 className="text-left">HIPO</h1>
              <h2 className="typography--tiny text-color--secondary text-left">
                FRONTEND DEVELOPER
              </h2>
            </div>
          </div>

          <div className="text-right typography--tiny">2021 - Present</div>
        </div>

        <div className="py-3 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-md"
              src="/pera.png"
              alt="Pera"
              width="75"
              height="75"
            />

            <div>
              <h1 className="text-left">PERA WALLET</h1>
              <h2 className="typography--tiny text-color--secondary text-left">
                FRONTEND DEVELOPER
              </h2>
            </div>
          </div>

          <div className="text-right typography--tiny">2022 - Present</div>
        </div>

        <div className="py-3 flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-md"
              src="/jamlab.jpeg"
              alt="Jamlab"
              width="75"
              height="75"
            />

            <div>
              <h1 className="text-left">JamLab</h1>
              <h2 className="typography--tiny text-color--secondary text-left">
                WEB DEVELOPMENT INTERN
              </h2>
            </div>
          </div>

          <div className="text-right typography--tiny">2021 - 2021</div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
