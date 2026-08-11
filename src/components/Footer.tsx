import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import { MOCK_COMPANY } from "@/data/company";


export default function Footer() {


  return (

    <footer className="bg-blue-950 text-white">


      <div className="max-w-7xl mx-auto px-6 py-16">


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">



          {/* Company Info */}

          <div>


            <h3 className="text-2xl font-bold mb-4">
              JJT GLOBAL
            </h3>



            <p className="text-sm text-white/70 leading-relaxed mb-4">

              Qingdao Junjietai International Trading Co., Ltd.
              is a professional China export company specializing in
              used cars, steel structures, construction machinery
              and global supply chain solutions.

            </p>



            <p className="text-sm text-white/60 leading-relaxed">

              青岛君杰泰进出口贸易有限公司

            </p>


          </div>







          {/* Quick Links */}

          <div>


            <h4 className="text-sm font-semibold mb-5 uppercase">

              Quick Links

            </h4>



            <ul className="space-y-3">


              <li>

                <Link
                  to="/"
                  className="text-sm text-white/70 hover:text-white"
                >

                  Home

                </Link>

              </li>



              <li>

                <Link
                  to="/about"
                  className="text-sm text-white/70 hover:text-white"
                >

                  About JJT

                </Link>

              </li>



              <li>

                <Link
                  to="/auto"
                  className="text-sm text-white/70 hover:text-white"
                >

                  JJT Auto

                </Link>

              </li>




              <li>

                <Link
                  to="/steel"
                  className="text-sm text-white/70 hover:text-white"
                >

                  JJT Steel

                </Link>

              </li>



              <li>

                <Link
                  to="/contact"
                  className="text-sm text-white/70 hover:text-white"
                >

                  Contact Us

                </Link>

              </li>



            </ul>


          </div>









          {/* SEO Products Keywords */}


          <div>


            <h4 className="text-sm font-semibold mb-5 uppercase">

              Our Business

            </h4>



            <ul className="space-y-3 text-sm text-white/70">


              <li>

                China Used Cars Export

              </li>


              <li>

                Used Vehicle Supplier China

              </li>



              <li>

                Used Car Exporter China

              </li>



              <li>

                China Steel Supplier

              </li>



              <li>

                Steel Structure Manufacturer China

              </li>



              <li>

                Construction Machinery Exporter

              </li>



            </ul>


          </div>









          {/* Contact */}


          <div>


            <h4 className="text-sm font-semibold mb-5 uppercase">

              Contact Us

            </h4>



            <ul className="space-y-4">



              <li className="flex gap-3">


                <Mail className="w-5 h-5 flex-shrink-0"/>


                <span className="text-sm text-white/70">

                  {MOCK_COMPANY.email}

                </span>


              </li>





              <li className="flex gap-3">


                <Phone className="w-5 h-5 flex-shrink-0"/>


                <span className="text-sm text-white/70">

                  {MOCK_COMPANY.phone}

                </span>


              </li>






              <li className="flex gap-3">


                <MessageCircle className="w-5 h-5 flex-shrink-0"/>


                <span className="text-sm text-white/70">

                  WhatsApp:
                  <br/>
                  {MOCK_COMPANY.whatsapp}

                </span>


              </li>







              <li className="flex gap-3">


                <MapPin className="w-5 h-5 flex-shrink-0"/>


                <span className="text-sm text-white/70">

                  {MOCK_COMPANY.address}

                </span>


              </li>





              <li className="flex gap-3">


                <Clock className="w-5 h-5 flex-shrink-0"/>


                <span className="text-sm text-white/70">

                  {MOCK_COMPANY.workingHours}

                </span>


              </li>



            </ul>



          </div>





        </div>









        {/* Bottom SEO Text */}


        <div className="mt-12 pt-8 border-t border-white/10">


          <p className="text-xs text-white/50 leading-relaxed text-center">


            © {new Date().getFullYear()} QINGDAO JUNJIETAI INTERNATIONAL TRADING CO., LTD.
            All Rights Reserved.
            Professional China Used Car Exporter,
            China Steel Supplier,
            Steel Structure Manufacturer and
            Construction Machinery Export Company.


          </p>



        </div>



      </div>



    </footer>


  );


}