export default function Footer() {
  return (
    <footer>
      <div className="bg-transparent text-white py-3">
        <div className="container">
          <div className="row mt-2 mb-2">
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white border-0">
                  <h2>About Us</h2>
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  <p>
                    We are a team of passionate developers creating amazing web
                    applications.
                  </p>
                </li>
                <li className="list-group-item bg-transparent text-white">
                  <p>Follow us!</p>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white border-0">
                  <h2>Contact Us</h2>
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  <p>Email: coolemail@email.com</p>
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  <p>Phone: +123 456 7890</p>
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  <p>Address: 123 Cool Street, Cool City, Cool Country</p>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent text-white border-0">
                  <h2>Follow Us</h2>
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  <p>Stay connected with us on social media!</p>
                </li>
                <li className="list-group-item bg-transparent text-white border-0">
                  <p>
                    <a href="#" className="text-white">
                      Facebook
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white">
                      Twitter
                    </a>{" "}
                    |{" "}
                    <a href="#" className="text-white">
                      Instagram
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
