import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";
import { GOOGLEMAPS_API_KEY } from "./constants";
const bodyParser = require("body-parser");

const app = express();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/login", (req, res) => {
    res.type("application/json");
    res.send(
        JSON.stringify({
            token: "XXXYYYZZZ",
            maps_api_key: GOOGLEMAPS_API_KEY,
        })
    );
});

app.post("/redacted_trail", (req, res) => {
    // const payload = req.body;

    res.type("application/json");
    res.send({
        data: {
            identifier: "<identifier>",
            organization_id: "<organization_id>",
            trail: {
                latitude: 12.34,
                longitude: 12.34,
                time: 123456789,
            },
            user_id: "<user_id>",
        },
        success: true,
    });
});

app.get("/redacted_trails", (req, res) => {
    res.type("application/json");
    res.send(
        JSON.stringify({
            data: [
                {
                    identifier: "<identifier>",
                    organization_id: "<organization_id>",
                    trail: {
                        latitude: 12.34,
                        longitude: 12.34,
                        time: 123456789,
                    },
                    user_id: "<user_id>",
                },
                {
                    identifier: "<identifier>",
                    organization_id: "<organization_id>",
                    trail: {
                        latitude: 12.34,
                        longitude: 12.34,
                        time: 123456789,
                    },
                    user_id: "<user_id>",
                },
            ],
        })
    );
});

app.post("/safe_paths", (req, res) => {
    res.type("application/json");
    res.send({
        datetime_created: "Fri, 27 Mar 2020 04:32:12 GMT",
        organization_id: "<organization_id>",
        safe_path: {
            authority_name: "Fake Organization",
            concern_points: [
                {
                    latitude: 12.34,
                    longitude: 12.34,
                    time: 123,
                },
                {
                    latitude: 12.34,
                    longitude: 12.34,
                    time: 456,
                },
            ],
            info_website: "https://www.something.gov/path/to/info/website",
            publish_date_utc: 1584924583,
        },
        user_id: "<user_id>",
    });
});

exports.safeplaces = functions.https.onRequest(app);
